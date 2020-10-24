FROM node:12.2.0-alpine 
COPY package.json /package.json
COPY src/ /src/
COPY public/ /public/  
RUN npm install -g 
EXPOSE 3000/tcp
CMD ["npm", "start"]