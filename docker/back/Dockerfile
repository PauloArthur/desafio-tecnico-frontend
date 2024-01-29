FROM node:20-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app/BACK
# Cache and Install dependencies
COPY /BACK .
RUN npm install
# # Copy app files
# # Expose port
EXPOSE 5001
# # Start the app
CMD exec npm run server