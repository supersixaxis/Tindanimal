# Tindanimal

Tindanimal is a project that consists of a backend built with NestJS and a frontend using Next.js. Follow the instructions below to set up the project locally.

## Installation

### Backend Setup

1. Navigate to the `back` directory:
```
   cd back
```
2. Install the dependencies:
```
   npm install
```
3. Create a .env file and add the following variables:

```
DATABASE_URL=your_database_url
FRONTEND_URL=your_frontend_url

```

4. Create a database:
   - Create a new database in your database management system.
   - Add data to the database.

5. Run the development server:
```
   npm run start:dev
```

### Frontend Setup
1. Navigate to the `front` directory:
```
   cd front
```
2. Install the dependencies:
```
   npm install
```
3. Create a .env file and add the following variables:

```
NEXT_PUBLIC_GRAPHQL_ENDPOINT=your_graphql_endpoint
```

4. Run the development server:
```
   npx next dev
```