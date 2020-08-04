---
layout: post
title: "Installing Arch Linux"
date: 2017-03-17
categories: "useful info"
---
2017-03-17-installing-arch-linux

This is a summary of the steps I followed to successfully install Arch Linux. Explanations aim to be minimal and concise, but do tell me if anything no longer works now.
<h2>Prepare a bootable USB stick</h2>
Download the <a href="https://www.archlinux.org/download/">Arch Linux ISO</a>. If you choose a mirror close to your physical location, it may take less to download. The downloaded file is named <code>archlinux-yyyy.mm.dd-dual.iso</code>(according to the date compiled), about 470MB.

In the past, the default is to prepare a bootable CD-ROM. This is straightforward because an ISO is already written in the data structure of an optical disk, and such tool for burning is prevalent enough. However, USBs seem more common these days, and it can also emulate the ISO structure. To make a bootable USB, on a Windows computer for instance, download <a href="https://rufus.akeo.ie/">Rufus</a>. Just drag Arch Linux ISO towards the Rufus window, and click start, and its GUI should be very straightforward. It is more convoluted to do so on a Mac. We have to format the USB first, and copy ISO into it using <code>dd</code> utility.
<h2>Enter the firmware interface</h2>
A firmware interface, stored in the ROM, is a bridge between software and hardware. Indeed, it is with its help that we boot a computer.

While the computer off, plug in the bootable USB. Be careful that, before the computer boots, there will be a moment the screen is shown with direction to enter the firmware interface. In the ASUS computer I am using, a notice that reads
<pre>Please press DEL or F2 to enter UEFI BIOS setting
</pre>
Do that immediately, or the computer with boot with default OS as before!

Now, you will see a temporary <code>zsh</code> shell, with prompt <code>root@archiso ~ #</code>. From now on, <code>#</code> sign indicates the shell prompt; please don't type it.
<h2>Partition of the Hard Disk</h2>
First list the disk blocks.
<pre>#  lsblk
</pre>
The largest block shall be your hard disk, which is likely listed <code>sda</code>. A smaller one is the bootable USB we are using. A still smaller one is the ROM (read-only memory where firmware is saved).

To partition the hard disk, invoke the command line input of utility <code>parted</code>.
<pre>#  parted /dev/sda
</pre>
From now on, the prompt <code>(parted)</code> will be shown for clarity (Don't type that).

Create a partition table with the MSDOS (MBR) standard.
<pre>(parted) mklabel msdos
</pre>
Meanwhile, UEFI/GPT partition is a newer standard, but not every motherboard supports. UEFI/GPT's partitioning commands are similar; see cited notes.

Here my PC has 1TB, and I will generously allocate 40GB for <code>/</code>(the root directory except for the user's home), 2GB for swap memory, and the rest for <code>/home/</code>(the user's home). Now that the present day computers usually have a large RAM (mine has 4GB), 2GB of swap memory shall be more than enough.

First create partition for the root directory except for home.
<pre>(parted) mkpart primary ext4 1MiB 40GiB
</pre>
Here the boot flag shall be set.
<pre>(parted) set 1 boot on
</pre>
Then create the partition for swap memory.
<pre>(parted) mkpart primary linux-swap 40GiB 42GiB
</pre>
Finally the partition for the root's home, which makes up the rest of the hard disk.
<pre>(parted) mkpart primary ext4 42GiB 100%
</pre>
In the steps above, if the requested partition cannot be made exactly as such, an alternative suggestion will be prompted, and if it is reasonable, say yes. You might also be asked again of the point of start and end, and again of the file system. I just typed enter to apply the default, and I hope it is okay. In addition, you may be warned that “The resulting partition is not properly aligned for best performance.” The Arch Linux Wiki suggest that we “ignore”.

Print a summary of each partition to double check the planned division.
<pre>(parted) print
</pre>
The result I saw reports that <code>sda1</code> is the root directory except home (used as booting process);<code>sda2</code> is the swap memory; and <code>sda3</code> the root's home.

Quit if everything seems to be fine.
<pre>(parted) quit
</pre>
<h2>Mounting partitions</h2>
Format partitions intended for root directory.
<pre>#  mkfs.ext4 /dev/sda1
</pre>
Mount the root directory.
<pre>#  mount /dev/sda1 /mnt
</pre>
To mount the home, we have to first create the directory, then mount it.
<pre>#  mkdir /mnt/home
#  mount /dev/sda3 /mnt/home
</pre>
<h2>Installation of system files</h2>
We will download packages, so Internet connection is required. The best situation is that you are using a PC with ethernet automatically connected. If not, you have to set it manually in CLI, which is not covered here. Alternatively, you may use a wifi (not covered here either). Anyway, beware that to access the Internet wirelessly later after reboot, all packages must be installed at this stage!

Assuming connection is established, send test packets to (for example) Google three times to test whether connection is fine.
<pre>#  ping -c 3 www.google.com
</pre>
Edit the list of mirrors, so that the servers physically closer to you are listed first. You may use <code>nano</code> if you are unfamiliar with <code>vi</code>.
<pre>#  vi /etc/pacman.d/mirrorlist
</pre>
Install the base packages. This will take quite a while, about twenty minutes in my case.
<pre>#  pacstrap -i /mnt base base-devel
</pre>
Generate the <code>fstab</code> file that specifies information about mounted partitions, and write it as the appropriate configuration file.
<pre>#  genfstab -U /mnt &gt; /mnt/etc/fstab
</pre>
<h2>Language and location</h2>
In completing the remaining tasks, temporarily take <code>/mnt</code> to be the root directory (the root is the target partition where Arch Linux is to be installed.
<pre>#  arch-chroot /mnt
</pre>
I would like to work with English interface, but have to display and type Chinese. I thus choose American English to be default of system display, but furthermore install Chinese input methods. To do so, first edit the languages to be enabled. (Same, use <code>nano</code> if you like.)
<pre>#  vi /etc/locale.gen
</pre>
I shall uncomment (delete the <code>#</code>) before the line <code>en_US.UTF-8 UTF-8</code> and <code>zh_TW.UTF-8 UTF-8</code>. Also uncomment other languages you want to use.

Then generate necessary information, save them, and export to terminal settings. Here <code>locale-gen</code> generates necessary information for all languages allowed to be used, while <code>locale.conf</code> specifies only the one for system's display.
<pre>#  locale-gen
#  echo "LANG=en_US.UTF-8" &gt; /etc/locale.conf
#  export LANG=en_US.UTF-8
</pre>
Next install the input method framework <code>ibus</code>, and the input method “Rime”. It supports several Chinese input methods.
<pre>#  pacman -S ibus
#  pacman -S ibus-rime
</pre>
To initiate it at startup, add these lines in <code>~/.xinitrc</code>:
<pre>export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus
ibus-daemon -drx
</pre>
Select the time zone.
<pre>#  tzselect
</pre>
In my case this is <code>4) Asia</code>, and <code>43) Taiwan</code> (The very existence of this item is a reassurance!), and confirm by <code>1) Yes</code>.

Create a symlink from the shared directory to the system configuration directory.
<pre>#  ln -s /usr/share/zoneinfo/Asia/Taiwan &gt; /etc/localtime
</pre>
Set the hardware clock.
<pre>#  hwclock --systohc --utc
</pre>
<h2>Setting a boot manager</h2>
For MBR users (see above), download a boot manager and an OS-detector (possibly for the sake of dual boot).
<pre>#  pacman -S grub
#  pacman -S os-prober
</pre>
Set up the boot loader <code>grub</code> on the booted partition, and prepare configuration file which will be read when booting. All the same, replace <code>sda</code> with your partition name.
<pre>#  grub-install --recheck --force --target=i386-pc /dev/sda
#  grub-mkconfig -o /boot/grub/grub.cfg
</pre>
At this point, I encountered the error <code>Failed to connect to lvmetad</code>. The is due to the <code>lvmetad</code> service that improves performance of LVM, the Logical Volume Manager (which manages disk drives and other mass-storage devices). We have to disable it by
<pre>#  vi /etc/lvm/lvm.conf
</pre>
and write <code>use_lvmetad = 0</code> (instead of the original <code>use_lvmetad = 1</code>).
<h2>Setting a host name</h2>
Set the host name for the system by writing relevant configuration file. (Replace <code>Host-Name</code> with your host name.)
<pre>#  echo "Host-Name" &gt; /etc/hostname
</pre>
Set the root's password. You will be prompted to enter the password twice to confirm it.
<pre>#  passwd
</pre>
Leave the <code>chroot</code>-ed environment (which was set to the target partition), unmount that partition, and schedule shutdown (will wait for about two minutes).
<pre>#  exit
#  umount -R /mnt
#  shutdown
</pre>
Unplug the USB, which is no longer needed, and start the computer now. After reboot is done, when you login, login as <code>root</code>.
<h2>Internet connection</h2>
Assuming a wired connection is available, now we set up DHCP (Dynamic Host Configuration Protocol) that requests an IP address in the present ethernet.
<pre>#  ip link
</pre>
The output includes several items. The first one is, in my case,
<pre>1: lo:mtu 65536 qdisk noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
</pre>
Start the DHCP service from now on, and whenever the system boots.
<pre>#  systemctl start dhcpcd@_______.service
#  systemctl enable dhcpcd@_______.service
</pre>
Replace the long underscore with the name of wired device just seen above. In my case, that is <code>lo</code>.

The method for obtaining wireless connection is not covered in this note; please see cited notes.
<h2>Creating the daily user's account</h2>
Create the user account to be used on a daily basis. Add the ID into the wheel group, who has sudo privileges. (I heard an advice that one ought not give the daily user sudo privilege. I tried that on a Mac for a while, and that immediately appeared overly pedantic to me!)
<pre>#  useradd -m -G wheel,users -s /bin/bash violapterin
#  passwd violapterin
</pre>
Set the daily user's password. Again, you will be prompted to enter the password twice to confirm it.

Download the <code>sudo</code> package so that we are able to perform the superuser-do feature.
<pre>#  pacman -S sudo
</pre>
Edit the <code>sudoers</code> file. (Use nano if you please.)
<pre>#  EDITOR=vi visudo
</pre>
Uncomment this line, by deleting <code>#</code> in front of them:
<pre>%wheel ALL=(ALL) ALL
</pre>
<h2>Downloading all stable packages</h2>
Make stable repositories available to package manager <code>pacman</code>, by opening:
<pre>#  vi /etc/pacman.conf
</pre>
and uncomment these lines:
<pre>[multilib]
Include = /etc/pacman.d/mirrorlist
</pre>
Update <code>pacman</code>, and install all refreshed packages. <code>-Syu</code> means respectively: install packages, refresh database for packages, and look for existing outdated packages.
<pre>#  sudo pacman –Syu
</pre>
A comprehensive list of packages is provided <a href="https://wiki.archlinux.org/index.php/list_of_applications">here</a>, classified according to usage. From now on, installing packages shall be straightforward.

Besides the official repository that <code>pacman</code> uses, there is another Arch User Repository maintained by community. Several counterparts to pacman (called helpers) exists, including <code>yay</code>, <code>pakku</code>, <code>pikaur</code>, and <code>pacaur</code>. Note that <code>yaourt</code> is deprecated, which may still exist in older guides. The flag <code>-S</code> means the same (i.e., installation).
<h2>Graphical interface</h2>
However, it remains to set up a desktop environment. To do so we install the X-server.
<pre>#  pacman -S xorg-server
#  pacman -S xorg-server-utils
</pre>
To learn which graphic card the current system is using, run
<pre>#  lspci -v
</pre>
And I see that my computer has an Intel GPU. (The output for your graphic cards may look different, but I assume it is easy enough to distinguish. See also cited notes.) In my case, I have to install
<pre>#  pacman -S xf86-video-intel
</pre>
See <a href="https://wiki.archlinux.org/index.php/desktop_environment">Desktop environment</a> for a list of available desktops. To install KDE, for example, use
<pre>#  pacman -S plasma
</pre>
To install utilities that come with KDE, use
<pre>#  pacman -S kde-applications
</pre>
Again this will take quite a while, nearly thirty minutes in my case. (Another package called <code>plasma-meta</code> seems to be a superset of <code>plasma</code>, but I am not sure. Similar is said of <code>kde-applications-meta</code> and <code>kde-applications</code>.)

After that, configure <code>.xinitrc</code> that calls KDE on startup. First, log in as the daily user's account, and write
<pre>#  echo "exec startkde" &gt; ~/.xinitrc
</pre>
Note that <code>.xinitrc</code> must be saved in the daily user's home in order to be found and read.

But even with this, KDE will only be started after <code>startx</code> command is run. To start KDE immediately after logged in, we need
<pre>#  pacman -S xorg-xinit
</pre>
And then put in <code>~/.bashrc</code>
<pre>if [ -z "$DISPLAY" ] &amp;&amp; [ -n "$XDG_VTNR" ] &amp;&amp; [ "$XDG_VTNR" -eq 1 ]; then
   exec startx
fi
</pre>
Translated, this means that start the X server, if the display variable is not a null string, and if the virtual terminal number of the X desktop group is not empty indicates there is only one terminal instance.

This guide ends here, because, in the presence of a beautiful GUI, instead of the scary black-and-white console, the readers will surely figure out themselves how to download relevant packages, thanks to the working internet connection and the well-written Arch Linux Wiki.
<h2>References</h2>
<ul>
 	<li style="list-style-type:none;">
<ul>
 	<li><a href="https://www.archlinux.org/download/">Arch Linux Wiki</a></li>
</ul>
</li>
</ul>
Almost all information you need can be found here!
<ul>
 	<li style="list-style-type:none;">
<ul>
 	<li>Swapnil Bhartiya, <a href="http://www.bhartiya.io/always-updated-arch-linux-tutorial/30411">Arch Linux Tutorial</a></li>
</ul>
</li>
</ul>
Which I relied heavily in preparing this note.
<ul>
 	<li style="list-style-type:none;">
<ul>
 	<li>Wei-Hsun Lin (signed as thus), <a href="http://www.wlintmp.net">Arch Linux: 安裝系統</a></li>
</ul>
</li>
</ul>
In Chinese.