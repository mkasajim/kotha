FROM debian:latest

RUN apt update && apt upgrade -y
RUN cd /
RUN git clone https://github.com/mkasajim/kotha.git
RUN cd kotha
WORKDIR /kotha
RUN npm install .
CMD npm start
