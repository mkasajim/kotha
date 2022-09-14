FROM debian:latest

RUN apt update && apt upgrade -y
RUN apt install git curl ffmpeg -y
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN cd /
RUN -b deta.sh --single-branch https://github.com/mkasajim/kotha.git
RUN cd kotha
WORKDIR /kotha
RUN npm install .
CMD npm start
