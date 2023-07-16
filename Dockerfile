FROM node:18.16.1-slim

USER node

WORKDIR /home/node/app

# Keep the container alive
CMD ["sh", "-c", "npm install && tail -f /dev/null"]
