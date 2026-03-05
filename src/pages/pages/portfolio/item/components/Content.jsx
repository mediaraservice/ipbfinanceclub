import hero from '@/assets/images/blog/hero-post.png';
import photo13 from '@/assets/images/photos/13.jpg';
import photo14 from '@/assets/images/photos/14.jpg';
import Icon from '@/components/wrappers/Icon';
import { FaMinus } from 'react-icons/fa6';
const Content = () => {
  return <>
      <section className="pb-20">
        <div className="container">
          <div className="text-center">
            <div>
              <img src={hero} alt="" className="rounded-md" />
            </div>

            <p className="text-sm text-default-400 mt-2">The image caption referencing the above image</p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
            <div>
              <h3 className="text-2xl">About Client</h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi
                alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur.
                Sed dicta maiores, eos culpa.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Project Description</h3>
              <p className="mt-5">
                Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui
                recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste
                vel unde magni.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
            <img src={photo14} alt="" className="rounded-md" />
            <img src={photo13} alt="" className="rounded-md" />
          </div>

          <div className="mt-16">
            <div>
              <h3 className="text-2xl">What We Did?</h3>
              <p className="text-default-800 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi
                alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur.
                Sed dicta maiores, eos culpa.
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-12">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                  <Icon icon="solar:filters-bold-duotone" className="size-8 text-primary" />
                </div>
                <div>
                  <h5 className="text-base">UI/UX Design</h5>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                  <Icon icon="solar:settings-bold-duotone" className="size-8 text-primary" />
                </div>
                <div>
                  <h5 className="text-base">Brand Identity</h5>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                  <Icon icon="solar:wallpaper-bold" className="size-8 text-primary" />
                </div>
                <div>
                  <h5 className="text-base">Web Devblopment</h5>
                </div>
              </div>
            </div>
            <p className="text-default-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi
              alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
              dicta maiores, eos culpa.
            </p>
            <h5 className="text-base mt-10">Technologies Used</h5>
            <p className="flex items-center gap-2 text-default-700 font-medium mt-3">
              <FaMinus />
              Sketch &amp; Illustrator
            </p>
            <p className="flex items-center gap-2 text-default-700 font-medium mt-3">
              <FaMinus />
              Raact JS
            </p>
            <p className="flex items-center gap-2 text-default-700 font-medium mt-3">
              <FaMinus />
              Django - A Web Framework in Python
            </p>
            <p className="flex items-center gap-2 text-default-700 font-medium mt-3">
              <FaMinus />
              PostgreSQL - Relational Database System
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default Content;