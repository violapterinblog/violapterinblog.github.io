---
layout: post
title: "Installing Arch Linux"
date: 2017-03-17
categories: "useful info"
---

This note summarizes the steps to install Arch Linux.
I do not intend to explain everything, and the wording is as concise as possible.
Do tell me if you find anything no longer working now, or any link broken.

# Prepare a bootable USB stick

Download the
    [Arch Linux ISO](https://www.archlinux.org/download/).
It is named like `archlinux-yyyy.mm.dd-dual.iso` (according to the date compiled), and is about 470MB.

To make a bootable USB, on a Windows computer for concreteness, you may use
    [Rufus](https://rufus.akeo.ie/).
The GUI for Windows should be very straightforward (just drag Arch Linux ISO onto the window).
On Mac, we have to format the USB first, and copy ISO into it using `dd` utility, which I am not familiar.

# Enter the firmware interface

A firmware interface, stored in the ROM, is a bridge between software and hardware, which helps boot a computer.
While the computer is off, plug in the bootable USB.
Before the computer boots, there will be a moment the screen is shown with direction like below

    Please press DEL or F2 to enter UEFI BIOS setting

Do that immediately, and you see a temporary `zsh` shell, with prompt

    root@archiso ~ #

In the below, `#` sign indicates the shell prompt.

# Partition of the Hard Disk

List the disk blocks.

    # lsblk

The largest block shall be your hard disk, which is likely called `sda`.
A smaller one is the bootable USB we are using.
A still smaller one is the ROM (read-only memory where firmware is saved).

To partition the hard disk, invoke the command line utility `parted`.

    # parted /dev/sda

Here, the prompt `(parted)` will be shown for clarity.
Create a partition table with the MSDOS (MBR) standard.

    (parted) mklabel msdos

Meanwhile, UEFI/GPT partition is a newer standard, which not every motherboard supports.
Partitioning commands for UEFI/GPT are similar and covered in references.

My computer currently used has 1TB,
and I will generously allocate 40GB for `/`(the root directory except for the user's home), 2GB for swap memory, and the rest for `/home/`(the user's home).
Nowadays computers often have a large RAM (mine has 4GB),
and 2GB of swap memory shall be more than enough.

First create partition for the root directory except for home.

    (parted) mkpart primary ext4 1MiB 40GiB

The boot flag shall be set to be true.

    (parted) set 1 boot on

Create the partition for swap memory.

    (parted) mkpart primary linux-swap 40GiB 42GiB

Finally the partition for the home, making up the rest of the hard disk.

    (parted) mkpart primary ext4 42GiB 100%

In the steps above, if the requested partition cannot be made precisely as such,
an alternative suggestion will be prompted.
You might also be asked again of the point of start and end, and of the file system.
I just typed enter to apply default for everything.
You may also be warned that `The resulting partition is not properly aligned for best performance.` which Arch Linux Wiki suggests that we ignore.

Print a summary of each partition to double check.

    (parted) print

My report has that `sda1` is the root directory except home, `sda2` the swap memory, `sda3` the root's home.
Quit if everything looks fine.

    (parted) quit

# Mounting partitions

Format partitions intended for root directory.

    # mkfs.ext4 /dev/sda1

Mount the root directory.

    # mount /dev/sda1 /mnt

To mount the home, create the directory, then mount it.

    # mkdir /mnt/home
    # mount /dev/sda3 /mnt/home

# Installation of system files

Internet connection is required,
since we will download packages.
The best situation is that you are using a PC with ethernet automatically connected.
If not, you have to set it in command line (which is not covered here).
Alternatively, you may use a Wifi (not covered here either).
We may test connection with (say)

    # ping -c 3 www.google.com

Edit the list of mirrors,
so the servers physically closer to you are preferred.
(You may use `nano`
if you are unfamiliar with `vi`, and same hereafter.)

    # vi /etc/pacman.d/mirrorlist

Install the base packages.
This will take quite a while, about twenty minutes in my case.

    # pacstrap -i /mnt base base-devel

Generate the `fstab` file that specifies information about mounted partitions,
and write it to the configuration file.

    # genfstab -U /mnt > /mnt/etc/fstab

# Language and location

In completing the remaining tasks, temporarily take `/mnt` to be the root directory (the target partition where Arch Linux is to be installed).

    # arch-chroot /mnt

I would like to work with English interface,
but have to display and type Chinese.
I thus choose American English to be the default for system display,
but further install Chinese input methods.
To do so, edit the languages we want to enable.

    # vi /etc/locale.gen

I have to uncomment (delete the `#`) before the line `en_US.UTF-8 UTF-8` and `zh_TW.UTF-8 UTF-8`.
Then, `locale-gen` generates necessary information for all languages enabled,
while `locale.conf` specifies only system display.

    # locale-gen
    # echo "LANG=en_US.UTF-8" > /etc/locale.conf
    # export LANG=en_US.UTF-8

Next install the input method framework Ibus (package `ibus`) and the input method Rime (package `ibus-rime`).
It supports several Chinese input methods.

To initiate it at startup, add these lines in `~/.xinitrc`:

    export GTK_IM_MODULE=ibus
    export XMODIFIERS=@im=ibus
    export QT_IM_MODULE=ibus
    ibus-daemon -drx

Select the time zone.

    # tzselect

In my case this is `4) Asia`, and `43) Taiwan`.
Its very existence of this item is a reassurance!

Create a symlink from the shared directory to the system configuration directory.

    # ln -s /usr/share/zoneinfo/Asia/Taiwan > /etc/localtime

Set the hardware clock.

    # hwclock --systohc --utc

# Setting a boot manager

For MBR users, download a boot manager and an OS-detector, possibly for sake of dual boot.
They are packages `grub` and `os-prober`.

Set up the `grub` on the booted partition, and generate the configuration file.
Again, replace `sda` with your partition name.

    # grub-install --recheck --force --target=i386-pc /dev/sda
    # grub-mkconfig -o /boot/grub/grub.cfg

At this point, I encountered the error `Failed to connect to lvmetad`.
The is due to the `lvmetad` service that improves performance of LVM, the Logical Volume Manager (which manages disk drives and other mass-storage devices).
We have to disable it by editing `/etc/lvm/lvm.conf`,
and write `use_lvmetad = 0`.

# Setting a host name

Replace `Host-Name` with your host name.

    # echo "Host-Name" > /etc/hostname

Set the root's password.

    # passwd

We may now leave the `chroot`-ed environment,
unmount the corresponding partition,
and schedule shutdown.

    # exit
    # umount -R /mnt
    # shutdown

Unplug the USB, which is no longer needed.
Start the computer now,
and login as `root`.

# Internet connection

Assuming a wired connection is available, we set up DHCP (Dynamic Host Configuration Protocol) that requests an IP address in the present ethernet.

    # ip link

The first item in the output is, in my case,

    1: lo:mtu 65536 qdisk noqueue state UNKNOWN mode DEFAULT group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00

Start the DHCP service now, and whenever the system boots.

    # systemctl start dhcpcd@_______.service
    # systemctl enable dhcpcd@_______.service

Replace the `______` with the name of wired device just seen above.
In my case, that is `lo`.

The method for obtaining wireless connection is not covered,
and please refer to references.

# Creating the daily user's account

Create a user account intended to be used on a daily basis.
Add the ID into the wheel group to get sudo privileges.

    # useradd -m -G wheel,users -s /bin/bash violapterin
    # passwd violapterin

This sets the daily user's password.

Install package `sudo` to get superuser privilege,
then edit the `sudoers` file.
Since this file is special, we have to specify the editor.

    # EDITOR=vi visudo

Uncomment this line, by deleting the beginning `#`.

	%wheel ALL=(ALL) ALL

# Downloading all stable packages

Make stable repositories available to package manager `pacman`, by opening `/etc/pacman.conf`,
and uncomment these lines:

    [multilib]
    Include = /etc/pacman.d/mirrorlist

Update `pacman`,
and install all refreshed packages.

    # sudo pacman –Syu

Flags `-Syu` means, respectively, install packages, refresh database for packages, and look for existing outdated packages.

A comprehensive list of packages is provided on Arch Linux Wiki's
    [List of applications](https://wiki.archlinux.org/index.php/list_of_applications),
    classified according to usage.
Besides the official repository that `pacman` uses, there is another Arch User Repository (AUR) maintained by community.
We need the so-called pacman helpers to install AUR packages, including `yay`, `pakku`, `pikaur`, and `pacaur`.
The flag `-S` again means installation.

# Graphical interface

However, it remains to set up a desktop environment.
To do so we install the X-server (packages `xorg-server` and `xorg-server-utils`).
To check which graphic card the current system is using, run

    # lspci -v

As my computer has an Intel GPU (examine your graphic cards to distinguish), in my case I have to install `xf86-video-intel`.

See
    [Desktop environment](https://wiki.archlinux.org/index.php/desktop_environment)
    for a list of available desktops.
I choose KDE (package `plasma` and `kde-applications`), which took nearly thirty minutes in my case.
(Package `plasma-meta` seems to be a superset of `plasma`.
Similar is said of `kde-applications-meta` and `kde-applications`.)

Configure `.xinitrc` that calls KDE on startup.
First, log in as the daily user's account, and write

    # echo "exec startkd>" > ~/.xinitrc

Note that `.xinitrc` must be saved in the daily user's home in order to be found and read.
But even with this, KDE will only be started after `startx` command is run.
To start KDE immediately after logged in, we need package `xorg-xinit`.
And then put in `~/.bashrc`

	if [ -z "$DISPLAY" ] && [ -n "$XDG_VTNR" ] && [ "$XDG_VTNR" -eq 1 ]; then
        exec startx
	fi

Translated, this means that we start the X server, if the display variable is not a null string, and if the virtual terminal number of the X desktop group is not empty, indicating there is only one terminal instance.

This guide ends here,
because, in the presence of a beautiful GUI, instead of the scary black-and-white command line, I am sure the readers will surely figure out themselves how to install relevant packages.

# References

- Arch Linux Wiki, [Installation Guide](https://wiki.archlinux.org/index.php/installation_guide).
In addition to this guide, the Wiki is very well written,
and almost all information you need can be found here.

- Swapnil Bhartiya, [Arch Linux Tutorial](http://www.bhartiya.io/always-updated-arch-linux-tutorial/30411).
Which I also relied heavily in preparing this note.

- Wei-Hsun Lin, [Arch Linux: 安裝系統](http://www.wlintmp.net).
In Chinese.
There are some remarks on Chinese input method.