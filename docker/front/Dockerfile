FROM node:20-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app/FRONT
# Cache and Install dependencies
COPY /FRONT/.env.example .env
COPY /FRONT .
RUN npm install
# Expose port
EXPOSE 4174
# Start the app
CMD npm run dev