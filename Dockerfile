FROM debian:latest

RUN apt update && apt upgrade -y 
RUN cd kotha
WORKDIR /kotha
RUN npm install .
CMD npm start
