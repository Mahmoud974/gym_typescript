import { SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { ClassType } from '../../shared/types';
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image1
    },
        {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image2
    },
        {
        name: "Advanced Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image3
    },
        {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image4
    },
        {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image5
    },
        {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet eos sequi modi eius facilis!",
        image: image6
    }
]
type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}>


          <motion.div
          className='md:my-5 md:m-3/5'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden:{opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
          >
            <div className='md:w-3/5'>
                <HText>OUR CLASSES</HText>
                <p className='py-5'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam labore accusamus, debitis aliquid esse blanditiis expedita deleniti nisi, eveniet voluptas, quod hic odio repellat.Deserunt numquam labore accusamus, debitis aliquid esse blanditiis expedita deleniti nisi, eveniet voluptas, quod hic odio repellat.
                </p>
            </div>
            </motion.div>  
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classes.map((item:ClassType,index)=>(
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>

    </section>
  )
}

export default OurClasses