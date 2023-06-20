# wo-app-wfe
Front end for work order system

Install npm

Linux Ubuntu:

```sudo apt-get install npm```


Run:

Linux:

```npm install```

```npm run dev```

Bootstrap:

https://getbootstrap.com/docs/5.2/layout/grid/


For Ubuntu, it comes with nodejs 12. So follow the steps below to remove it and install latest version

or anyone else with the same issue: delete the new package source:

```
cd /etc/apt/sources.list.d 
sudo rm nodesource.list
```
update apt, fix the install, remove nodejs and the nodejs-doc packages

in the output it will tell you to automatically remove it. Run that command.

```
sudo apt --fix-broken install
sudo apt update
sudo apt remove nodejs
sudo apt remove nodejs-doc
```
then use the instructions to install the latest node

in my case:

```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```