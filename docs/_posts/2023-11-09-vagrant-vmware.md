---
title: Bring up VMs with Vagrant/VMware on Windows
image-fa: fa-brands fa-linux
tags: vagrant vmware vm ubuntu linux python vscode
description: Guide on how to setup an Ubuntu VM with Vagrant and VMware as provider
---

In this blog post we’ll see how to install and configure the latest version of Vagrant on Windows to use VMware as a virtual machine (Ubuntu 22.04 LTS) provider.

## What is Vagrant?

Vagrant ([HashiCorp](https://www.hashicorp.com/)) enables users to quickly bring up development environments according to a pattern defined in a **Vagrantfile**.

A Vagrantfile is a Ruby file that describes the virtual machine as well as its configuration and provisioning.

Vagrant can run on Windows, Linux, and Mac OS X, and supports popular desktop hypervisors such as **VMware**, VirtualBox, HyperV, etc.

#### Prerequisites

- **[Virtualization (BIOS)](https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1)**
- **[OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)**
- **[VMware Workstation Player](https://www.vmware.com/products/workstation-player.html)**
- **[Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)**
- **[Vagrant VMware Utility](https://developer.hashicorp.com/vagrant/install/vmware)**
- **[VS Code](https://code.visualstudio.com/)**
- **Windows 10 2004 or later**
- [**Files and scripts**](https://github.com/ivandorte/ivandorte.github.io/raw/main/docs/_posts/files/2023-11-09-vagrant-vmware.7z)<br>
Download, unzip and open a cmd inside the folder.

## Vagrant pre-configuration

Open a cmd and install **vagrant-vmware-desktop** utility:

```
$ vagrant plugin install vagrant-vmware-desktop
```

Create a vagrant folder in your user profile:

```
$ md "%USERPROFILE%\<vagrant_folder>"
```

Where `<vagrant_folder>` is the name of the folder. For example:

```
$ md "%USERPROFILE%\ubuntu-vagrant"
```

Create the shared folder:

```
$ md "%USERPROFILE%\<shared_folder>"
```

Where `<shared_folder>` is the name of the shared folder. For example:

```
$ md "%USERPROFILE%\ubuntu-projects"
```

Download the [**Files and scripts**](https://github.com/ivandorte/ivandorte.github.io/raw/main/docs/_posts/files/2023-11-09-vagrant-vmware.7z) provided, unzip and open a cmd inside the folder.

Copy `Vagrantfile`, `python-install.sh`, `vagrant-start.bat`, `vagrant-stop.bat` to the vagrant folder (ubuntu-vagrant), and `.vscode` to the shared folder (ubuntu-projects):

```
copy Vagrantfile "%USERPROFILE%\ubuntu-vagrant"
copy python-install.sh "%USERPROFILE%\ubuntu-vagrant"
copy vagrant-start.bat "%USERPROFILE%\ubuntu-vagrant"
copy vagrant-stop.bat "%USERPROFILE%\ubuntu-vagrant"
xcopy /hievry .vscode "%USERPROFILE%\ubuntu-projects\.vscode"
```

Then move to the vagrant folder:

```
$ cd "%USERPROFILE%\ubuntu-vagrant"
```

Before starting our VM, have a look at the **Vagrantfile** and modify the variables, especially:

```
SHARED_UBU="python-dev"
SHARED_HOST="ubuntu-projects"
```

Where:

- `SHARED_UBU` is the name of the work directory (python-dev) in the guest we are going to sync with the shared folder in the host (ubuntu-projects). Name it as you wish.
- `SHARED_HOST` is the name of the shared folder in the host (ubuntu-project).
- Modify `SHARED_HOST` to reflect the shared folder (host) name defined previously, or synced folder won't work.

Vagrant uses a base image, known as **box**, to quietly clone a virtual machine. Specifying the box to use for your Vagrant environment is always the first step after creating a new Vagrantfile:

```
config.vm.box = "generic/ubuntu2204"
```

Available boxes are hosted on the [HashiCorp's Vagrant Cloud box catalog](https://app.vagrantup.com/boxes/search).

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-09-vagrant-vmware/01.webm?raw=true" caption="The box catalog" %}

On the first run only, [**provisioning**](https://developer.hashicorp.com/vagrant/docs/provisioning/basic_usage) is run:

```
config.vm.provision :shell, path: "python-install.sh", privileged: true
```

In this case a sh script is automatically run on the VM to install Python 3.9.
To skip the execution of the script just comment out this line.

## Vagrant Up!

Let's install the base box, i.e. Ubuntu 22.04:

```
$ vagrant box add generic/ubuntu2204
```

When prompted, choose **vmware_desktop**!

With your Vagrantfile in place, you can now boot your first test environment by using the following command:

```
$ vagrant up --provider vmware_desktop --provision
```

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-09-vagrant-vmware/02.webm?raw=true" caption="Bringing up the VM..." %}

Where:

- `--provider` flag defines which provider to run, i.e. vmware_desktop.
- `--provision` forces provisioning.

(OPTIONAL) You can create desktop shortcuts to start and stop commands running `02-create-vm-shortcuts.ps1` via PowerShell:

```
$ Powershell.exe -executionpolicy remotesigned -File 02-create-vm-shortcuts.ps1
```

## VS Code – SSH config

```
vagrant ssh-config > %USERPROFILE%\.ssh\config
```

The following command output a valid configuration for an SSH config file to SSH into the running Vagrant machine from `ssh` directly (instead of using vagrant ssh), i.e. you will be able to access the VM directly from VS Code (don't forget to install Remote - SSH extension).

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-09-vagrant-vmware/03.webm?raw=true" caption="SSH into the vagrant machine" %}

(OPTIONAL) You can go ahead and configure VS Code/Python by installing the following (suggested) extensions:

- [Python (Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Jupyter (Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
- [Python indent (Kevin Rose)](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent)
- [Python Type Hint (njqdev)](https://marketplace.visualstudio.com/items?itemName=njqdev.vscode-python-typehint)
- [autoDocstring (Nils Werner)](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring)
- [Ruff (Astral Software)](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff)
- [intelliCode (Microsoft)](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

## Automated installation! :sunglasses:

You can lazily execute all the steps above by running the `01-vagrant-install.bat`! :D

## Credits

[enricocid](https://github.com/enricocid)

## Sponsor the authors

#### External links

{% include elements/donate.html donation="https://www.paypal.me/ivandorte" %}<br>
{% include elements/donate.html donation="https://www.paypal.me/enricocid" %}
