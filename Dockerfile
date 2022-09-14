FROM debian:latest

RUN apt update && apt upgrade -y
RUN apt install git curl ffmpeg -y
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN cd /
RUN git clone https://github.com/mkasajim/kotha.git
RUN cd kotha
WORKDIR /kotha
RUN npm install .
CMD npm start
