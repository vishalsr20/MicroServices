🚖 Microservices Ride-Hailing System (Uber-like Backend)

A fully functional Microservices-based backend system inspired by Uber/Ola, built using Node.js, Express, RabbitMQ, and JWT authentication.
This project demonstrates real-world system design patterns: distributed services, event-driven communication, and scalable ride-matching workflows.

📌 Features
✔ Microservices Architecture

Independent services with clear separation of concerns:

User Service — Authentication, user creation

Captain Service — Captain registration, availability, ride acceptance

Ride Service — Ride request, matching, ride lifecycle

API Gateway — Central entry point for routing & JWT validation

✔ Event-Driven Communication

Uses RabbitMQ to exchange events between services:

captain.online

ride.requested

ride.proposal

ride.accepted

✔ JWT Authentication

All services validate tokens via the Gateway for secure and stateless auth.

✔ Scalable & Decoupled System

No service directly depends on another — everything is handled through events.

🏗 Architecture Overview
                 ┌───────────────────────────┐
                 │        API Gateway         │
                 │   (JWT Auth + Routing)     │
                 └────────────┬──────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
┌────────────────┐   ┌────────────────┐   ┌────────────────┐
│  User Service  │   │ Captain Service│   │  Ride Service  │
└────────────────┘   └────────────────┘   └────────────────┘
         │                    │                    │
         └─────────── RabbitMQ Event Bus ─────────┘

📂 Folder Structure
MicroServices/
│
├── gateway/          # API Gateway (routing + JWT validation)
├── user/             # User microservice
├── captain/          # Captain microservice
├── ride/             # Ride microservice
└── .gitignore

Each service contains:
/routes
/controllers
/services
/rabbitmq (publisher/subscriber)

🛠 Tech Stack
Backend:

Node.js

Express

JWT Authentication

Messaging:

RabbitMQ (Event Bus)

Architecture:

Microservices

Event-driven system

API Gateway pattern

