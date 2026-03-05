import heroPost from '@/assets/images/blog/hero-post.png';
import photo3 from '@/assets/images/photos/3.jpg';
import photo4 from '@/assets/images/photos/4.jpg';
import photo5 from '@/assets/images/photos/5.jpg';
import photo6 from '@/assets/images/photos/6.jpg';
import Icon from '@/components/wrappers/Icon';
import { FaMinus } from 'react-icons/fa6';
const Post = () => {
  return <>
      <section>
        <div className="container">
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias,
            quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta
            maiores, eos culpa.
          </p>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-6">
            Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui
            recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel
            unde magni.
          </p>
          <div>
            <img src={heroPost} alt="" className="rounded-md" />
            <p className="text-xs text-default-500 mt-2 text-center">The image caption referencing the above image</p>
          </div>
          <h1 className="text-xl mb-3 mt-10">Itaque earum rerum hic tenetur sapiente delectu</h1>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-6">
            Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio
            nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis
            voluptas assumenda est omnis dolor repellendus.
          </p>
          <div className="bg-default-100 p-8 mb-6">
            <h5 className="text-base sm:text-lg font-normal text-default-600 mb-3">
              Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beataevitae dicta sunt explicabo tempore cum soluta.
            </h5>
            <p className="text-default-500 font-light text-sm">
              <FaMinus className="me-2" /> Christian Hall
            </p>
          </div>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            et quas molestias excepturi sint occaecati cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum
            et fuga.
          </p>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias consequ perferendis doloribus asperiores
            repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa
            quae ab illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate lit esse quam nihil molestiae consequatur eligendi optio cumque nihil impedit quo
            minus id quod maxime placeat facere possimus omnis voluptas assumenda est vel illum qui dolorem eum fugiat quo voluptas aperiam, eaque
            ipsa quae ab illo inventore.
          </p>
          <div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 my-10">
              <div>
                <img src={photo3} alt='' className="rounded" />
              </div>
              <div>
                <img src={photo4} alt='' className="rounded" />
              </div>
              <div>
                <img src={photo5} alt='' className="rounded" />
              </div>
              <div>
                <img src={photo6} alt='' className="rounded" />
              </div>
            </div>
          </div>
          <h6 className="text-sm/relaxed tracking-wider mb-3">Conclusion</h6>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat qui dolorem ipsum quia dolor sit amet consectetur velitsedquia non numquam eius modi tempora incidunt.
          </p>
          <p className="text-sm/relaxed tracking-wider text-default-600 mb-5">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-sm tracking-wider text-default-600">
              <FaMinus className="me-3" />
              Dream places
            </p>
            <p className="text-sm tracking-wider text-default-600">
              <FaMinus className="me-3" />
              Walking/Hiking tours
            </p>
            <p className="text-sm tracking-wider text-default-600">
              <FaMinus className="me-3" />
              Tennis lessons with expert coaches
            </p>
            <p className="text-sm tracking-wider text-default-600">
              <FaMinus className="me-3" />
              Sailing adventures
            </p>
          </div>
          <div className="flex flex-wrap sm:gap-2 gap-5 mt-10">
            <div>
              <a href="#" className="text-xs bg-default-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-default-300/80 focus:bg-default-300/80 py-2 px-4">
                Startup
              </a>
            </div>
            <div>
              <a href="#" className="text-xs bg-default-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-default-300/80 focus:bg-default-300/80 py-2 px-4">
                Website Design
              </a>
            </div>
            <div>
              <a href="#" className="text-xs bg-default-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-default-300/80 focus:bg-default-300/80 py-2 px-4">
                Website Development
              </a>
            </div>
            <div>
              <a href="#" className="text-xs bg-default-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-default-300/80 focus:bg-default-300/80 py-2 px-4">
                Tailwind
              </a>
            </div>
          </div>
          <div className="flex gap-2 mt-8 mb-14">
            <p className="text-sm text-default-500">SHARE:</p>
            <div className="flex gap-3">
              <span>
                <a href="#">
                  <Icon icon="tabler:brand-facebook" className="size-5 text-blue-500" />
                </a>
              </span>
              <span>
                <a href="#">
                  <Icon icon="tabler:brand-x" className="size-5 text-teal-500" />
                </a>
              </span>
              <span>
                <a href="#">
                  <Icon icon="tabler:brand-instagram" className="size-5 text-red-500" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Post;