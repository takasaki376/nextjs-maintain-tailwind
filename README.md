# 初期セットアップ

## Next.js

```
yarn create next-app . --typescript
```

## 必要 module のインストール

```
yarn add -D prettier eslint-config-prettier
```

## tsconfig.json 設定変更

`"compilerOptions": {`の最終行に、`"baseUrl": "."`を追加する

## tailwind css のインストール

```
yarn add -D tailwindcss postcss autoprefixer
yarn add -D prettier-plugin-tailwindcss
```

## tailwind.config.js, postcss.config.js の生成

```
npx tailwindcss init -p
```

## tailwind.config.js の 設定追加

- content にパスを追記する。パスの対象となる tsx ファイルの中身を tailwind から css に変換される。
- `mode: 'jit',`を先頭に追加する。

```
module.exports = {
  mode: 'jit',
  content: ["./src/**/**/*.{ts,tsx}"],
  theme: {
    /* Mantineと一致させる: https://mantine.dev/theming/responsive */
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
}
```

## mantine インスタンス

```
yarn add @mantine/hooks @mantine/core @mantine/next
```
