<p align="center"><img src="https://live.staticflickr.com/65535/49185149122_37f5c52e43_k.jpg"></p>

<h1 align="center">Example REST API</h1>

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