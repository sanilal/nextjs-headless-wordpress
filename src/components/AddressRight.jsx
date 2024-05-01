export default function AddressRight({ address, map }) {
  return (
    <div className='flex'>
       <a href={map} target="_blank">{address}</a>
        
    </div>
  )
}
