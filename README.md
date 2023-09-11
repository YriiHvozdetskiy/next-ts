# хороша практика

розділяєм імпорти: глобальні вище групуєм, локальні нище

`Props` обявляєм саме так (тому що стрілочну ф-цію можна перетворити на Function Declarations і пропси не потрібно
переміщати):

interface Props {
title: string;
}
export const EXAMPLES = ({title}: Props)
export default function EXAMPLES({title}: Props)

# замітки:

- loading.tsx - краще не створювати в -- томущо loading буде 'блимкати на всіх серверних сторінках де є завантаження'
  app/
  page.tsx
  loading.tsx

- `Suspense` контент в [серверних] компонентах завантажуться один раз в браузер?
- `Suspense` в [клієєнських] компонентах можна використовувати `Suspense` якщо запит відбувається в [серверній]
  компоненті див. Client
- `Suspense` може бути "асинхрона серверна компонента" в якій можна робити фетч запит див. TextServer
  АЛЕ ТАК [НАДСИЛАЄТЬСЯ ТРИ ЗАПИТА (хз чого)] так краще не робити

- axios.defaults.baseURL = 'https://api.sciepro.sheep.fish/api' - якщо записати базову url, то можна робити axios запити так: await axios.get(`/illustrations/${id}`)

# zustand

- в v5 не потрібно в кожній компоненті викликати `shallow` лише при створені
- https://github.com/pmndrs/zustand/discussions/1937

