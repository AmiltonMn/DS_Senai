import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'

dayjs.extend(localizedFormat)
dayjs.locale('pt-br')

export { dayjs }