# LMS

## Setup instructions :

1. Clone the project 


```
    git clone https://github.com/praneshdeshmukh/lms-frontend.git
```

2. Move into directory


```
    cd lms-frontend
```

3. Install dependencies


```
    npm i
```

4. Run the server


```
    npm run dev
```

### Setup Instructions for Tailwind : (https://tailwindcss.com/docs/installation)

1. Install Tailwind


```
    npm install -D tailwindcss
```

2. Create Tailwind config file


```
    npx tailwindcss init
    
```

3. Add file extensions to config file in the contents property

```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```