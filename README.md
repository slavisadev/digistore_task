# Frontend Code Review

## Step 1: Modularization and Separation of Concerns

The initial step of the refactoring process is to modularize the code by separating individual responsibilities into distinct files. This involves:

### Service Extraction

- Moving the `MessageService` into its own dedicated file (`message.service.ts`) within a `services` directory. This ensures that business logic and data management related to messages are encapsulated within a service, adhering to the single-responsibility principle.

### Component Decomposition

- Creating separate files for each Angular component (`MessageComponent`, `ChatComponent`, `CreateMessageComponent`). Each component file contains only the relevant logic, template, and styles for that specific component, promoting better modularity and easier testing.

### File and Folder Structure

- Organizing files into `components` and `services` directories to logically group related parts of the application, improving project structure and navigation.

## Step 2

### Separation into html/css/ts files

- Benefits of Separation: readability, reusability and maintainability

## Step 3: Refactoring `MessageService` and `Message` Model

### Overview

The `MessageService` and `Message` model were refactored to improve maintainability, scalability, and adherence to best practices. The key changes involved separating concerns, centralizing configuration, and leveraging Angular's `HttpClient` for API communication.

### Changes Made

#### 1. Separating the `Message` Model

- Created a new file `message.model.ts` in the `src/app/models/` directory to house the `IMessage` interface and the `Message` class.
- This separation allows for a clear distinction between models and service logic, promoting modularity and reusability.

## Step 4

### Introduced environment variables

## Step 5: Chat component refactoring and error handling

### Use Observables Instead of Directly Mutating Data

### Error Handling and Loading States

## Step 6:

### Key Changes and Improvements:

- Moved the HTTP Request to the Service:
- The sendMessage() method in the MessageService handles the HTTP POST request using HttpClient.
- Replaced fetch with HttpClient:
- HttpClient.post() is used instead of fetch. This method automatically handles JSON serialization and deserialization.
- Error Handling and Loading State:
- Added a loading state and error handling logic in the CreateMessageComponent to provide feedback to the user.
