import Link from 'next/link';
import { useState } from 'react'

const MenuItem = ({ menuItem }) => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <li>
            <Link href={menuItem.slug && menuItem.slug}>
                {menuItem.title}
            </Link>

                {menuItem?.childItems?.length && (
                    <button onClick={() => setisOpen(!isOpen)}>
                        {
                            isOpen &&
                            <i className='fal fa-minus'></i>
                        }
                        {
                            !isOpen &&
                            <i className='fal fa-plus'></i>
                        }
                    </button>
                )}

            {menuItem?.childItems?.length && (
                <ul style={{
                    height: isOpen ? 'auto' : '0px',
                    padding: isOpen ? '0' : '0px',
                    paddingTop: isOpen ? '10px' : '0px',
                    overflow: 'hidden'
                }}>
                    {menuItem?.childItems.map((item, id) => (
                        <MenuItem menuItem={item} key={id} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default MenuItem