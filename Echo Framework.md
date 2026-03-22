# Echo Framework

Echo is a high-performance, minimalist Go web framework used as the HTTP router and middleware stack for Vemakin's backend API.

---

## 📦 Version

- **Package**: `github.com/labstack/echo/v4`
- **Version**: `v4.11.4`

---

## 🎯 Features

- **Optimized Router**: Fast HTTP router with zero dynamic memory allocation
- **Middleware**: Extensible middleware framework
- **Data Binding**: JSON, XML, and form-data binding
- **Data Rendering**: JSON, XML, HTML templates
- **Validation**: Request validation using struct tags
- **Error Handling**: Centralized error handling
- **TLS**: Automatic TLS with Let's Encrypt
- **HTTP/2**: HTTP/2 support

---

## 🚀 Basic Setup

### Creating an Echo Instance

```go
package main

import (
    "net/http"
    
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
)

func main() {
    // Create Echo instance
    e := echo.New()
    
    // Middleware
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())
    e.Use(middleware.CORS())
    
    // Routes
    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, "Hello, World!")
    })
    
    // Start server
    e.Logger.Fatal(e.Start(":8080"))
}
```

---

## 🛣️ Routing

### Basic Routes

```go
// HTTP methods
e.GET("/users", getUsers)
e.POST("/users", createUser)
e.GET("/users/:id", getUser)
e.PUT("/users/:id", updateUser)
e.PATCH("/users/:id", patchUser)
e.DELETE("/users/:id", deleteUser)

// Route groups
api := e.Group("/api")
api.GET("/projects", getProjects)
api.POST("/projects", createProject)

// Nested groups
v1 := api.Group("/v1")
v1.GET("/shots", getShots)

// Route with multiple methods
e.Match([]string{http.MethodGet, http.MethodPost}, "/resource", handler)

// Any method
e.Any("/any", handler)
```

### Route Parameters

```go
// URL parameters
e.GET("/users/:id", func(c echo.Context) error {
    id := c.Param("id")
    return c.String(http.StatusOK, "User ID: "+id)
})

// Multiple parameters
e.GET("/projects/:projectId/shots/:shotId", func(c echo.Context) error {
    projectId := c.Param("projectId")
    shotId := c.Param("shotId")
    return c.JSON(http.StatusOK, map[string]string{
        "projectId": projectId,
        "shotId": shotId,
    })
})

// Optional parameters
e.GET("/files/*", func(c echo.Context) error {
    path := c.Param("*")
    return c.String(http.StatusOK, "Path: "+path)
})
```

### Query Parameters

```go
e.GET("/search", func(c echo.Context) error {
    query := c.QueryParam("q")
    page := c.QueryParam("page")
    limit := c.QueryParam("limit")
    
    // With defaults
    limit := c.DefaultQueryParam("limit", "10")
    
    return c.JSON(http.StatusOK, map[string]string{
        "query": query,
        "page": page,
        "limit": limit,
    })
})
```

---

## 📦 Request Handling

### Binding Request Data

```go
// Define request struct
type CreateProjectRequest struct {
    Name string `json:"name" validate:"required,min=1,max=100"`
    Description string `json:"description"`
}

// Handler with binding
e.POST("/projects", func(c echo.Context) error {
    var req CreateProjectRequest
    
    // Bind and validate
    if err := c.Bind(&req); err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
    
    if err := c.Validate(&req); err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
    
    // Process request
    project := &Project{
        Name: req.Name,
        Description: req.Description,
    }
    
    return c.JSON(http.StatusCreated, project)
})
```

### Form Data

```go
// Form binding
type LoginRequest struct {
    Email    string `form:"email" validate:"required,email"`
    Password string `form:"password" validate:"required"`
}

e.POST("/login", func(c echo.Context) error {
    var req LoginRequest
    if err := c.Bind(&req); err != nil {
        return err
    }
    // Process login
    return c.JSON(http.StatusOK, map[string]string{"token": "jwt-token"})
})
```

### File Upload

```go
e.POST("/upload", func(c echo.Context) error {
    // Get file
    file, err := c.FormFile("file")
    if err != nil {
        return err
    }
    
    // Open file
    src, err := file.Open()
    if err != nil {
        return err
    }
    defer src.Close()
    
    // Save file
    dst, err := os.Create(file.Filename)
    if err != nil {
        return err
    }
    defer dst.Close()
    
    if _, err = io.Copy(dst, src); err != nil {
        return err
    }
    
    return c.String(http.StatusOK, "File uploaded")
})
```

---

## 📤 Response Handling

### JSON Responses

```go
// Simple JSON
e.GET("/json", func(c echo.Context) error {
    return c.JSON(http.StatusOK, map[string]string{
        "message": "Hello",
        "status": "ok",
    })
})

// JSON with status
e.GET("/created", func(c echo.Context) error {
    return c.JSON(http.StatusCreated, newProject)
})

// JSON pretty print
e.GET("/pretty", func(c echo.Context) error {
    return c.JSONPretty(http.StatusOK, data, "  ")
})

// JSON with indentation
e.GET("/indent", func(c echo.Context) error {
    c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
    return json.NewEncoder(c.Response()).Encode(data)
})
```

### Other Response Types

```go
// String
e.GET("/string", func(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
})

// HTML
e.GET("/html", func(c echo.Context) error {
    return c.HTML(http.StatusOK, "<h1>Hello</h1>")
})

// NoContent
e.DELETE("/resource/:id", func(c echo.Context) error {
    return c.NoContent(http.StatusNoContent)
})

// Redirect
e.GET("/redirect", func(c echo.Context) error {
    return c.Redirect(http.StatusMovedPermanently, "https://example.com")
})

// File
e.GET("/file", func(c echo.Context) error {
    return c.File("/path/to/file.pdf")
})

// Attachment (download)
e.GET("/download", func(c echo.Context) error {
    return c.Attachment("/path/to/file.pdf", "document.pdf")
})
```

---

## 🔒 Middleware

### Built-in Middleware

```go
import "github.com/labstack/echo/v4/middleware"

// Logger - logs HTTP requests
e.Use(middleware.Logger())
e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
    Format: "method=${method}, uri=${uri}, status=${status}\n",
}))

// Recover - recovers from panics
e.Use(middleware.Recover())

// CORS - Cross-Origin Resource Sharing
e.Use(middleware.CORS())
e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
    AllowOrigins: []string{"https://vemakin.app", "http://localhost:3000"},
    AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
    AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
    AllowCredentials: true,
}))

// Gzip - compression
e.Use(middleware.Gzip())
e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
    Level: 5,
}))

// Request ID
e.Use(middleware.RequestID())

// Secure - security headers
e.Use(middleware.Secure())

// Static files
e.Use(middleware.Static("/static"))
```

### Custom Middleware

```go
// Authentication middleware
func AuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
    return func(c echo.Context) error {
        authHeader := c.Request().Header.Get("Authorization")
        if authHeader == "" {
            return echo.NewHTTPError(http.StatusUnauthorized, "missing token")
        }
        
        // Validate token
        userID, err := validateToken(authHeader)
        if err != nil {
            return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
        }
        
        // Set user context
        c.Set("userID", userID)
        
        return next(c)
    }
}

// Apply to specific routes
api := e.Group("/api")
api.Use(AuthMiddleware)

// Apply to specific route
e.GET("/protected", handler, AuthMiddleware)

// Multiple middleware
e.GET("/admin", handler, AuthMiddleware, AdminMiddleware)
```

### Middleware Groups

```go
// Public routes (no auth)
e.GET("/health", healthHandler)
e.POST("/login", loginHandler)

// Protected routes (require auth)
protected := e.Group("/api")
protected.Use(AuthMiddleware)
protected.GET("/projects", getProjects)
protected.POST("/projects", createProject)

// Admin routes (require auth + admin)
admin := e.Group("/admin")
admin.Use(AuthMiddleware, AdminMiddleware)
admin.GET("/users", getAllUsers)
```

---

## ⚠️ Error Handling

### HTTP Errors

```go
// Return HTTP error
return echo.NewHTTPError(http.StatusBadRequest, "invalid request")

// With custom message
return echo.NewHTTPError(http.StatusNotFound, "project not found")

// With error code
err := echo.NewHTTPError(http.StatusBadRequest, "validation failed")
err.Internal = validationError
return err
```

### Custom Error Handler

```go
// Custom HTTP error handler
e.HTTPErrorHandler = func(err error, c echo.Context) {
    // Get HTTP error
    he, ok := err.(*echo.HTTPError)
    if !ok {
        he = echo.NewHTTPError(http.StatusInternalServerError, err.Error())
    }
    
    // Log error
    log.Printf("Error: %v", err)
    
    // Send response
    if !c.Response().Committed {
        if c.Request().Method == http.MethodHead {
            err = c.NoContent(he.Code)
        } else {
            err = c.JSON(he.Code, map[string]interface{}{
                "error": he.Message,
                "code": he.Code,
            })
        }
        if err != nil {
            log.Printf("Error sending error response: %v", err)
        }
    }
}
```

---

## ✅ Validation

### Struct Validation

```go
import "github.com/go-playground/validator/v10"

type CustomValidator struct {
    validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
    if err := cv.validator.Struct(i); err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
    return nil
}

// Register validator
e.Validator = &CustomValidator{validator: validator.New()}

// Usage in handler
if err := c.Validate(project); err != nil {
    return err
}
```

---

## 🔗 Related Documentation

- [[Go]] - Go language overview
- [[Backend API]] - API endpoint handlers
- [[Authentication Flow]] - Auth middleware
- [[CORS Configuration]] - CORS settings

---

*Last updated: 2025-03-13*
