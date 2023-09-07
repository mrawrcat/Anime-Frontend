FROM node:18
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]