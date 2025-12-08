# Planets CRUD App

A simple MEN stack (MongoDB, Express, Node.js) application for managing planets.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your MongoDB connection string:
```
MONGODBKEY=your_mongodb_connection_string
PORT=8080
```

3. Start the server:
```bash
nodemon server.js
```

4. Open http://localhost:8080/planets

## Test Data

Use these examples when creating planets:

### Earth
| Field | Value |
|-------|-------|
| Name | Earth |
| Description | The third planet from the Sun and the only known planet to harbor life. |
| Image URL | https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/240px-The_Blue_Marble_%28remastered%29.jpg |
| Type | Rocky |
| Diameter | 12742 |
| Distance from Sun | 150 |
| Number of Moons | 1 |
| Has Rings | No |
| Favorite | Yes |

### Jupiter
| Field | Value |
|-------|-------|
| Name | Jupiter |
| Description | The largest planet in our solar system, a gas giant with a Great Red Spot. |
| Image URL | https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/240px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg |
| Type | Gas Giant |
| Diameter | 139820 |
| Distance from Sun | 778 |
| Number of Moons | 95 |
| Has Rings | Yes |
| Favorite | No |

### Saturn
| Field | Value |
|-------|-------|
| Name | Saturn |
| Description | Known for its prominent ring system made of ice and rock. |
| Image URL | https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/240px-Saturn_during_Equinox.jpg |
| Type | Gas Giant |
| Diameter | 116460 |
| Distance from Sun | 1434 |
| Number of Moons | 146 |
| Has Rings | Yes |
| Favorite | Yes |

### Pluto
| Field | Value |
|-------|-------|
| Name | Pluto |
| Description | A dwarf planet in the Kuiper belt, once considered the ninth planet. |
| Image URL | https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/240px-Pluto_in_True_Color_-_High-Res.jpg |
| Type | Dwarf |
| Diameter | 2377 |
| Distance from Sun | 5906 |
| Number of Moons | 5 |
| Has Rings | No |
| Favorite | No |

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /planets | List all planets |
| GET | /planets/new | New planet form |
| POST | /planets | Create planet |
| GET | /planets/:id | Show planet |
| GET | /planets/:id/edit | Edit planet form |
| PUT | /planets/:id | Update planet |
| DELETE | /planets/:id | Delete planet |
