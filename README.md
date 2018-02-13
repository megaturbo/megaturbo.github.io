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

Simply open the `app/index.html` file with your web browser, and you're set.
