import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar4 from '@/assets/images/avatars/img-4.jpg';
import { FaComment } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Comment = () => {
  return <>
      <section className="lg:py-24 py-14">
        <div className="container">
          <div className="flex items-center gap-2">
            <h1 className="tracking-wider">Comments</h1>
            <span className="bg-default-200 px-2 rounded-md">3</span>
          </div>
          <div>
            <div className="flex gap-3 my-6">
              <img src={avatar4} alt="" className="h-11 w-11 rounded-md" />
              <div>
                <h6 className="text-sm mb-1">Sansa Stark</h6>
                <p className="text-sm text-default-500">2 days ago</p>
                <p className="text-sm/relaxed tracking-wider text-default-600 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                </p>
                <Link to="" className="text-primary text-sm flex items-center">
                  <FaComment className="me-1" /> Reply
                </Link>
                <div className="flex gap-3 my-6">
                  <img src={avatar1} alt="" className="h-11 w-11 rounded-md" />
                  <div>
                    <h6 className="text-sm mb-1">Cersei Lannister</h6>
                    <p className="text-sm text-default-500">1 days ago</p>
                    <p className="text-sm/relaxed tracking-wider text-default-600 mt-2">
                      Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                    </p>
                    <Link to="" className="text-primary text-sm flex items-center">
                      <FaComment className="me-1" /> Reply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-default-200" />
            <div className="flex gap-3 my-6">
              <img src={avatar2} alt="" className="h-11 w-11 rounded-md" />
              <div>
                <h6 className="text-sm mb-1">Sansa Stark</h6>
                <p className="text-sm text-default-500">2 days ago</p>
                <p className="text-sm/relaxed tracking-wider text-default-600 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                </p>
                <Link to="" className="text-primary text-sm flex items-center">
                  <FaComment className="me-1" /> Reply
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className="border border-default-200 bg-white rounded p-6">
              <h1>Post a comment</h1>
              <div className="flex flex-col gap-5 mt-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <input className="rounded border-default-300 focus:border-default-400 focus:ring-0 w-full text-sm" type="text" id="fname" name="fname" placeholder="Name" />
                  </div>
                  <div>
                    <input className="rounded border-default-300 focus:border-default-400 focus:ring-0 w-full text-sm" type="email" id="email" name="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <input className="rounded border-default-300 focus:border-default-400 focus:ring-0 w-full text-sm" type="text" id="Subject" name="Subject" placeholder="Subject" />
                </div>
                <div>
                  <textarea className="rounded border-default-300 focus:border-default-400 focus:ring-0 w-full text-sm" id="message" name="message" rows={5} placeholder="Message" />
                </div>
                <button className="flex">
                  <a href="#" className="bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3">
                    Submit
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Comment;