import Logo from '../assets/logo1.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function FooterSection(){
  const FooterItem = [
    {
      header: "Home",
      links: [
        "Become Affiliate",
        "Go Unlimited",
        "Services"
      ]
    },
    {
      header: "Legals",
      links: [
        "License",
        "Refund Policy",
        "About Us",
        "Contacts",
      ]
    },
    {
      header: "Blog",
      links: [
        "Business Stories",
        "Digital Store",
        "Learning",
        "Social Media"
      ]
    },
    {
      header: "Products",
      links: [
        "Design Systems",
        "Themes & Templates",
        "Mockups",
        "Presentations",
        "Wireframes Kits",
        "UI Kits"
      ]
    }
  ]



  return(
    <section className='contain-fluid md:px-16 pt-12 md:pt-16 pb-4 sm:px-8 px-4 bg-[#000000c4]'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='md:col-span-4 col-span-12'>
          <img className='w-2/3 max-w-[160px]' src={Logo} alt="" />
        </div>

        <div className='md:col-span-8 col-span-12'>
          <div className='grid grid-cols-12 gap-4'>
          {
            FooterItem.map((item, index) =>(
              <div key={index} className='md:col-span-3 col-span-6 flex flex-col gap-3'>
                <a className='text-white text-xl font-semibold md:text-start text-center' href="#">{item.header}</a>
                {
                  item.links.map((lnk, index) =>(
                     <a className='text-white md:text-start text-center' key={index} href="#">{lnk}</a>
                  ))
                }
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 border-t border-gray-50 pt-4 text-gray-100">
        <p>Copyright <span className='font-bold'>Degic</span> © {new Date().getFullYear()}</p>
        <div className="space-x-1">
          <FacebookRoundedIcon className="w-8 h-8 socialIcon1"/>
          <InstagramIcon className="w-8 h-8 socialIcon1"/>
          <XIcon className="w-8 h-8 socialIcon1"/>
        </div>
      </div>
    </section>
  )
}

export default FooterSection;