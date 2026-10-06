import copy from '../locales/it.json'

import slide01 from '../assets/images/hero-slide/532817668_1224362346159952_2362087147544078799_n.jpg'
import slide02 from '../assets/images/hero-slide/538660531_1234100495186137_8985989529644698512_n.jpg'
import slide03 from '../assets/images/hero-slide/544007527_18524228731049779_2801598197067111610_n.jpg'
import slide04 from '../assets/images/hero-slide/551576980_18526419970049779_1448198885830482510_n.jpg'
import slide05 from '../assets/images/hero-slide/558959499_1268432795086240_5790525122957620365_n.jpg'
import slide06 from '../assets/images/hero-slide/562659547_820887877072901_3377447287203063145_n.jpg'
import slide07 from '../assets/images/hero-slide/573591723_18534907621049779_8719273767436725320_n.jpg'
import slide08 from '../assets/images/hero-slide/573914999_18534740860049779_4569344922062087079_n.jpg'
import slide09 from '../assets/images/hero-slide/575596996_18534907360049779_4814481602085373920_n.jpg'
import slide10 from '../assets/images/hero-slide/600327907_1325561589373360_4705223098482319560_n.jpg'
import slide11 from '../assets/images/hero-slide/612192024_1340527114543474_251794383894775438_n.jpg'
import slide12 from '../assets/images/hero-slide/624722637_1361473605782158_3976961155387642449_n.jpg'
import slide13 from '../assets/images/hero-slide/640116953_1374525474476971_5003504686653538486_n.jpg'
import slide14 from '../assets/images/hero-slide/644240755_1385916630004522_3917287579773248909_n.jpg'
import slide15 from '../assets/images/hero-slide/652589253_1396246385638213_7988036472546865620_n.jpg'
import slide16 from '../assets/images/hero-slide/657240457_1405654668030718_2382287029512871408_n.jpg'
import slide17 from '../assets/images/hero-slide/684879465_18581688814049779_742586676615926887_n.jpg'
import slide18 from '../assets/images/hero-slide/720495750_1467584458504405_8062170035740180046_n.jpg'
import slide19 from '../assets/images/hero-slide/725173296_1470210304908487_2577439086724834885_n.jpg'
import slide20 from '../assets/images/hero-slide/751842551_1497729265489924_6987214409303348944_n.jpg'

const slideSources = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20] as const

export const heroSlides = slideSources.map((src, index) => ({
  id: `hero-${index + 1}`,
  src,
  alt: copy.heroSlides[`photo${String(index + 1).padStart(2, '0')}` as keyof typeof copy.heroSlides],
}))
