import sd from '../assets/images/sekolah_logo/sd.png';
import smp from '../assets/images/sekolah_logo/smp.png';
import smk from '../assets/images/sekolah_logo/smk.png';
import uni from '../assets/images/sekolah_logo/uni.png';

const educationsData = [
  {
    year: '2004-2009',
    name: 'SDN Kedung Jaya 2',
    city: 'Bogor',
    image: sd
  },
  {
    year: '2009-2014',
    name: 'SMP Bina Greha',
    city: 'Bogor',
    image: smp
  },
  {
    year: '2014-2017',
    name: 'SMK Tri Dharma 2',
    city: 'Bogor',
    image: smk
  },
  {
    year: '2017-2020',
    name: 'Univ.Bina Sarana Informatika',
    city: 'Bogor',
    image: uni
  }
]

for (let i = 0;  i <= educationsData.length - 1; i++) {
  educationsData[i].id = i + 1
}

export { educationsData }