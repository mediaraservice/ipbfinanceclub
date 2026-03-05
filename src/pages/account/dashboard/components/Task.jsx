import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const taskData = [{
  id: 1,
  title: 'Draft the new contract document for sales team',
  comment: '21',
  color: 'bg-cyan-500/10 text-cyan-500',
  priority: 'High',
  task: '3/7',
  time: 'Today 10pm'
}, {
  id: 2,
  title: 'iOS App home page design',
  comment: '05',
  color: 'bg-cyan-500/10 text-cyan-500',
  priority: 'Medium',
  task: '10/11',
  time: 'Today 5pm'
}, {
  id: 3,
  title: 'Enable analytics tracking',
  comment: '07',
  color: 'bg-gray-500/10 text-gray-500',
  priority: 'Medium',
  task: '05/11',
  time: 'Tomorrow 5pm'
}, {
  id: 4,
  title: 'Kanban board design',
  comment: '07',
  color: 'bg-gray-500/10 text-gray-500',
  priority: 'Low',
  task: '0/3',
  time: 'Sep 11, 3pm'
}];
const Task = () => {
  return <>
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="flex items-center justify-between my-6">
            <div>
              <h4 className="text-base text-default-800">Tasks</h4>
            </div>
            <div className="text-end">
              <Link to="" className="font-semibold flex items-center gap-2 text-primary text-sm">
                View All
                <Icon icon="tabler:arrow-right" className="size-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full mb-4">
            {taskData.map((item, idx) => <div className="bg-white" key={idx}>
                <div className="p-6">
                  <div className="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
                    <div className="w-1/2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-default-300" id="task1" />
                        <label className="text-sm font-semibold text-default-700" htmlFor="task1">
                          {item.title}
                        </label>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <span className={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold ${item.color}`}>
                        {item.time}
                      </span>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="flex items-center justify-end gap-6">
                        <div>
                          <div className="inline-flex items-center gap-2">
                            <Icon icon="tabler:list" className="size-5 text-default-800 inline" />
                            <span className="text-sm text-default-800 font-medium">{item.task}</span>
                          </div>
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-2">
                            <Icon icon="tabler:list" className="size-5 text-default-800 inline" />
                            <span className="text-sm text-default-800 font-medium">{item.comment}</span>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold ${item.priority === 'High' ? 'bg-red-500/10 text-red-500' : item.priority === 'Medium' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'}`}>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          <button className="flex items-center justify-center mx-auto mb-6">
            <a href="#" className="inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2 group">
              <span className="animate-spin inline-block h-4 w-4 border-2 border-primary border-b-transparent group-hover:border-white group-hover:border-b-transparent rounded-full align-[-.125em] me-2" />
              Load More
            </a>
          </button>
        </div>
      </section>
    </>;
};
export default Task;