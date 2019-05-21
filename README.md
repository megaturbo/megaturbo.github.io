# Plome Website
A simple webapp to show some love to Plome.

## Deploy in a container

### Prerequisistes
- `docker`
- `docker-compose` supporting version 2.1

### Config

- `cp docker-compose-example.yml docker-compose.yml`
- Change the ports in the `docker-compose.yml` file

### Run
- `docker-compose up --build`
  - Optional `-d` if you want to run in background

## Test locally

`python -m http.server 8000 --directory app/`
