import SectionTitle from '../../../../assets/Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem';
import UseMenu from '../../../../hOOKS/UseMenu';
const PopularMenu = () => {
  const[menu] = UseMenu();
  const popular = menu.filter(item=>item.category==='popular');
  return (
        <section>
<SectionTitle heading="from our menu"  subheading="popular items"   > 

</SectionTitle>

<div className='grid md:grid-cols-2 gap-4'>

{

  popular.map(item=> <MenuItem key= {item._id} item={item} > </MenuItem>)

}

</div>
            
        </section>
    );
};

export default PopularMenu;