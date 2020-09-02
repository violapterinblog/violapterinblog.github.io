---
layout: post
title: "Installing Arch Linux"
date: 2017-03-17
categories: "needful notices"
---

This note summarizes the steps to install Arch Linux.
I do not intend to explain everything, and the wording is as concise as possible.
Do tell me if you find anything no longer working now, or any link broken.

# Booting with a USB

Download the
    [Arch Linux ISO](https://www.archlinux.org/download/).
To make a bootable USB, on a Windows computer (for concreteness) you may use
    [Rufus](https://rufus.akeo.ie/).
The GUI for Windows should be very straightforward.
On Mac, we have to format the USB first, and copy ISO into it using `dd` utility, which I am not familiar.

We then enter the firmware interface, which is a bridge between software and hardware.
While the computer is off, plug in the bootable USB.
Before the computer starts normally, there will be a notic like

    Please press DEL or F2 to enter UEFI BIOS setting

Do that immediately, and there will be a temporary `zsh` shell, with prompt

    root@archiso ~ #

In the below, `#` sign indicates the shell prompt.

# Partition and formatting the hard disk

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

Create partition for the root directory except for home.

    (parted) mkpart primary ext4 1MiB 40GiB

Set the boot flag to be true.

    (parted) set 1 boot on

Create the partition for swap memory.

    (parted) mkpart primary linux-swap 40GiB 42GiB

Finally create the partition for the home, making up the rest of the hard disk.

    (parted) mkpart primary ext4 42GiB 100%

In the steps above, if the requested partition cannot be made precisely as such,
an alternative suggestion will be prompted.
You might also be asked again of the point of start and end, and of the file system.
I just apply default for everything.
You may also be warned that `The resulting partition is not properly aligned for best performance.` which we may ignore.

Print a summary of each partition to double check.

    (parted) print

My report has that `sda1` is the root directory except home, `sda2` the swap memory, `sda3` the root's home.
Quit if everything looks fine.

    (parted) quit

Format partitions intended for root directory.

    # mkfs.ext4 /dev/sda1

Mount the root directory.

    # mount /dev/sda1 /mnt

To mount the home, create the directory, then mount it.

    # mkdir /mnt/home
    # mount /dev/sda3 /mnt/home

# Installation of system files

Now the internet connection is required,
since we will download packages.
It is best that you have ethernet automatically connected.
Otherwise, you have to set it in command line (which is not covered here).
Alternatively, you may use a Wifi (not covered here either).
We may test connection with (say)

    # ping -c 3 www.google.com

Edit the list of mirrors,
so that closer servers are preferred.
(You may use `nano`
if you are unfamiliar with `vi`, and same hereafter.)

    # vi /etc/pacman.d/mirrorlist

Install the base packages, which will take quite a while, about twenty minutes in my case.

    # pacstrap -i /mnt base base-devel

Generate the `fstab` file (which specifies information about mounted partitions),
and write it to the configuration file.

    # genfstab -U /mnt > /mnt/etc/fstab

# Language and location

In completing the remaining tasks, temporarily take `/mnt` to be the root directory (the partition where Arch Linux will be installed).

    # arch-chroot /mnt

I shall choose American English to be the default for system display,
and further install Chinese input methods.
To do so, edit the languages to be enabled.

    # vi /etc/locale.gen

I have to uncomment (delete the `#`) before the line `en_US.UTF-8 UTF-8` and `zh_TW.UTF-8 UTF-8`.
Then, `locale-gen` generates necessary information for all languages enabled,
while `locale.conf` specifies system display.

    # locale-gen
    # echo "LANG=en_US.UTF-8" > /etc/locale.conf
    # export LANG=en_US.UTF-8

FOr me, I have to install the input method framework Ibus (package `ibus`) and the input method Rime (package `ibus-rime`).
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
They are provided by packages `grub` and `os-prober`.

Set up the `grub` on the booted partition, and generate the configuration file.
Again, replace `sda` with your partition name.

    # grub-install --recheck --force --target=i386-pc /dev/sda
    # grub-mkconfig -o /boot/grub/grub.cfg

At this point, I encountered the error `Failed to connect to lvmetad`.
The is due to the `lvmetad` service that improves performance of LVM, the Logical Volume Manager (which manages disk drives and other mass-storage devices).
I have to disable it by editing `/etc/lvm/lvm.conf`,
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

Unplug the USB,
restart,
and login as `root`.

# Internet connection

Assuming a connection is fine, we set up DHCP (Dynamic Host Configuration Protocol) that requests an IP address in the present ethernet.

    # ip link

The first item in the output is, in my case,

    1: lo:mtu 65536 qdisk noqueue state UNKNOWN mode DEFAULT group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00

Start the DHCP service now, and whenever the system boots.

    # systemctl start dhcpcd@_______.service
    # systemctl enable dhcpcd@_______.service

Replace the `______` with the name of wired device just seen above.
Mine is `lo`.

# Creating the daily user's account

Create a user account intended to be used on a daily basis.
Add the ID (mine is `violapterin`) into the wheel group to get sudo privileges,
and sets its password.

    # useradd -m -G wheel,users -s /bin/bash violapterin
    # passwd violapterin

Install package `sudo` to get superuser privilege,
then edit the `sudoers` file.
Since this file is special, we have to specify the editor.

    # EDITOR=vi visudo

Uncomment this line (by deleting the beginning `#`).

	%wheel ALL=(ALL) ALL

# Basic packages

Make stable repositories available to package manager `pacman`, by opening `/etc/pacman.conf`, and uncommenting these lines:

    [multilib]
    Include = /etc/pacman.d/mirrorlist

Update `pacman`,
and install all refreshed packages.

    # sudo pacman –Syu

Flags `-Syu` means, respectively, install packages, refresh database for packages, and look for existing outdated packages.

A
    [comprehensive list of packages](https://wiki.archlinux.org/index.php/list_of_applications),
is provided on Arch Linux Wiki's
Besides the official repository that `pacman` uses, there is another Arch User Repository (AUR) maintained by community.
We need the so-called pacman helpers to install AUR packages, including `yay`, `pakku`, `pikaur`, and `pacaur`.
The flag `-S` again means installation.

# Graphical interface

It remains to set up a desktop environment.
We install the X-server (packages `xorg-server` and `xorg-server-utils`).
To check which graphic card the current system is using, run

    # lspci -v

As my computer has an Intel GPU (examine your graphic cards to distinguish), I have to install `xf86-video-intel`.

See
    [Desktop environment](https://wiki.archlinux.org/index.php/desktop_environment)
    for a list of available desktops.
I choose KDE (package `plasma` and `kde-applications`), which took nearly thirty minutes in my case.
(Package `plasma-meta` seems to be a superset of `plasma`.
Similar is true of `kde-applications-meta` and `kde-applications`.)

We configure `.xinitrc` that calls KDE on startup.
First, log in as the daily user's account, and write these:

    # echo "exec startkd>" > ~/.xinitrc

Here `.xinitrc` must be saved in the daily user's home in order to be found and read.
Even so, KDE will only be started after `startx` command is run.
To start KDE immediately after logged in, install package `xorg-xinit`.
And then put in `~/.bashrc` these lines:

	if [ -z "$DISPLAY" ] && [ -n "$XDG_VTNR" ] && [ "$XDG_VTNR" -eq 1 ]; then
        exec startx
	fi

Translated, this means that we start the X server, if the display variable is not a null string, and if the virtual terminal number of the X desktop group is not empty, indicating there is only one terminal instance.

This guide ends here,
because, in the presence of a beautiful GUI, instead of the scary black-and-white command line, I am sure the readers will figure out how to install relevant applications.

# References

- Arch Linux Wiki, [Installation Guide](https://wiki.archlinux.org/index.php/installation_guide).
In addition to this guide, the Wiki is very well written,
and almost all information you need can be found here.

- Swapnil Bhartiya, [Arch Linux Tutorial](http://www.bhartiya.io/always-updated-arch-linux-tutorial/30411).
Which I also relied heavily in preparing this note.

- Wei-Hsun Lin, [Arch Linux: 安裝系統](http://www.wlintmp.net).
In Chinese.
There are some remarks on Chinese input method.