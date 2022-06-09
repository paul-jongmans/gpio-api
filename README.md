<p align="center"><img src="https://heise.cloudimg.io/width/1920/q75.png-lossy-75.webp-lossy-75.foil1/_www-heise-de_/tipps-tricks/imgs/96/2/7/8/6/5/0/3/RPi4b-Aufmacher-fa9370a645c0c100.jpeg"></p>

<h1 align="center">GPIO REST API</h1>

<h3 align="center">
Open Source REST API for controlling GPIO pins on rasberry
</h3>

<p align="center">
<a href="#"><img src="https://img.shields.io/badge/version-1.0-blue"></a>
<a href="#"><img src="https://img.shields.io/badge/build-pass-brightgreen"></a>
<a href="#"><img src="https://img.shields.io/badge/release-master-orange"></a>
<a href="#"><img src="https://img.shields.io/badge/interface-REST-brightgreen"></a>
</p>

## Usage

```http
POST https://api.example.com/api/gpio/set
```

```json
{
    "gpio": 5,
    "status": true 
}
```
