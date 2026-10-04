import cardioImage from '../assets/images/gallery/body-planet-sala-cardio.avif'
import cyclingImage from '../assets/images/gallery/indoor-cycling.avif'
import galleryImage from '../assets/images/gallery/body-planet-salottino.avif'
import heroImage from '../assets/images/hero/programma-body-planet.avif'
import machinesImage from '../assets/images/gallery/leg-machines.avif'
import logo from '../assets/logos/Body-Planet-logo.avif'
import outsideImage from '../assets/images/gallery/outside.avif'
import weightsImage from '../assets/images/gallery/weight-room.avif'

export const siteMedia = {
  logo,
  heroImage,
  gallery: [
    { id: 'salottino', src: galleryImage, altKey: 'gallery.imageAlt.salottino' },
    { id: 'sala-cardio', src: cardioImage, altKey: 'gallery.imageAlt.cardio' },
    { id: 'indoor-cycling', src: cyclingImage, altKey: 'gallery.imageAlt.cycling' },
    { id: 'leg-machines', src: machinesImage, altKey: 'gallery.imageAlt.machines' },
    { id: 'esterno', src: outsideImage, altKey: 'gallery.imageAlt.outside' },
    { id: 'sala-pesi', src: weightsImage, altKey: 'gallery.imageAlt.weights' },
  ],
} as const
