# builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install production dependencies
RUN npm ci --production

EXPOSE 3000

# Use exec form for CMD to fix the warning and properly handle signals
CMD ["npm", "start"]
