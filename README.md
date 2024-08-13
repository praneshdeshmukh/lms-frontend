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
    npm install -D tailwindcss postcss autoprefixer
```

2. Create Tailwind config file


```
    npx tailwindcss init -p    
```

3. Add file extensions to config file in the contents property

```
    "./index.html","./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add following deatils in tailwind property of tailwind config
```
    plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
```

### Adding plugins and dependencies


```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort

1. Install the plugin

```
    npm i eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports' : 'error'
```

3. Add simple import sort plugin in `.eslint.cjs`

```
    plugins: [..., 'simple-import-sort']
```

4. To enable simple-import-sort plugin automatically

    - Open `settings.json`
    - add the following config
```
    "editor.codeActionOnSave" : true
```
