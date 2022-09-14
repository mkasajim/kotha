RUN cd kotha
WORKDIR /kotha
RUN npm install .
CMD npm start
