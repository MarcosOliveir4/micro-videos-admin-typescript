FROM  node:22.16.0-alpine

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]