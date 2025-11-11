# PWA_SQL_JAVA_RESTART

**Proyecto:** Plataforma PWA con backend Java y base de datos SQL  
**Versión inicial:** V01  
**Autor:** PROEBAC25  
**Fecha:** 11 de noviembre de 2025  
**Estado:** Arranque operativo – Fase 1 completada

---

## Descripción

Retomamos un desarrollo PWA parcialmente completado (EstaNoche.es + Agendatelo.es) con:
- **Frontend:** PWA instalable, offline, responsive.
- **Backend:** Java Spring Boot + JDBC/Hibernate.
- **Base de datos:** PostgreSQL (Supabase).
- **Despliegue:** Vercel (frontend) + Railway/Render (backend).

---

## Estructura del proyecto
PWA_SQL_JAVA_RESTART/
├── frontend/                # PWA (React/Vite o HTML)
│   ├── public/
│   │   ├── manifest.json
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── index.html
│   └── package.json
│
├── backend/                 # Java Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/proebac25/
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   ├── repository/
│   │   │   │   ├── entity/
│   │   │   │   └── PwaSqlJavaApplication.java
│   │   │   └── resources/
│   │   │       ├── application.yml
│   │   │       └── schema.sql
│   └── pom.xml
│
├── database/                # SQL + Supabase
│   ├── schema.sql           # Estructura completa
│   ├── seed.sql             # Datos de prueba (pendiente)
│   └── supabase/
│       └── config.json
│
├── docs/                    # Documentación SF
│   ├── INFORME_DIAGNOSTICO_PWA_SQL_JAVA_V01.docx
│   ├── PLAN_CONTINUIDAD_PWA_SQL_JAVA_V01.docx
│   └── ENTREGA_FINAL_PWA_SQL_JAVA_V01.docx
│
├── .gitignore
├── README.md
└── LICENSE


---

## Tablas de la base de datos

| Tabla                | Descripción |
|----------------------|-----------|
| `users`              | Usuarios (profesionales, clientes, admins) |
| `business_contacts`  | Múltiples contactos por negocio |
| `business_addresses` | Múltiples direcciones por negocio |
| `events`             | Eventos de EstaNoche.es y Agendatelo.es |

> Ver `database/schema.sql` para estructura completa.

---

## Fases del proyecto (SF_V02)

1. **Fase 1 – Análisis y diagnóstico** ✅  
   - Estructura local creada  
   - `schema.sql` generado  
   - Git inicializado  
   - `README.md` documentado

2. **Fase 2 – Desarrollo modular** ⏳  
   - Backend Java (controladores, servicios)  
   - Frontend PWA (páginas, componentes)  
   - Integración API REST  

3. **Fase 3 – Validación y entrega** ⏳  
   - Pruebas offline, instalación, sincronización  
   - Documentación final  
   - Despliegue en producción  

---

## Requisitos

- Node.js ≥ 18
- Java 17+
- PostgreSQL (Supabase)
- Git
- Vercel CLI

---

## Comandos rápidos

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && ./mvnw spring-boot:run

# Base de datos (Supabase)
# Usa schema.sql en Supabase SQL Editor