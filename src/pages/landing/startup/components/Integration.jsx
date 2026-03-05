import ac from '@/assets/images/brands/ac.jpeg';
import at from '@/assets/images/brands/at.png';
import fb from '@/assets/images/brands/fb.png';
import gsheet from '@/assets/images/brands/gsheet.png';
import salesforce from '@/assets/images/brands/salesforce.jpg';
import slack from '@/assets/images/brands/slack.png';
const integrationData = [{
  name: 'Slack',
  description: 'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
  image: slack
}, {
  name: 'Facebook Lead Ads',
  description: 'Facebook lead ads make signing up for business information easy for people and more valuable for businesses',
  image: fb
}, {
  name: 'Salesforce',
  description: 'Salesforce is a leading enterprise customer relationship manager (CRM) application',
  image: salesforce
}, {
  name: 'Airtable',
  description: 'Organize anything with Airtable, a modern database created for everyone',
  image: at
}, {
  name: 'Google Sheets',
  description: 'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data',
  image: gsheet
}, {
  name: 'ActiveCampaign',
  description: 'ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform',
  image: ac
}];
const Integration = () => {
  return <>
      <section className="bg-default-100 xl:py-24 py-16">
        <div className="container" data-aos="fade-up" data-aos-duration={1500}>
          <div className="text-center">
            <span className="text-xs bg-primary/10 text-primary/90 rounded-full px-3 py-1">Integrations</span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">Sync your data anywhere</h1>
            <p className="text-default-500">
              Sync your campaigns or other marketing data <span className="text-primary">anywhere.</span>
            </p>
          </div>
          <div className="pt-16">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-7">
              {integrationData.map((item, idx) => <div key={idx}>
                  <div className="bg-white flex items-center rounded gap-5 p-5">
                    <img src={item.image} alt="slack" className="w-16" />
                    <div>
                      <h1 className="mb-3">{item.name}</h1>
                      <p className="text-default-500">{item.description}</p>
                    </div>
                  </div>
                </div>)}

            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Integration;