import Link from 'next/link';

export default function Dropdown() {
  return (
<div className="dropdown inline-block relative group">
	<button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
		<span>Dropdown ?</span>
	</button>
	<ul className="dropdown-content absolute hidden text-gray-700 pt-1 group-hover:block">
		<li><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</Link></li>
		<li><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</Link></li>
      	<li className="dropdown">
          <Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3 ?</Link>
          	<ul className="dropdown-content absolute text-gray-700 pl-5 ml-24 -mt-10 hidden group-hover:block">
          		<li><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 whitespace-no-wrap  " href="#">Option 3-1</Link></li>
              	<li><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 whitespace-no-wrap  " href="#">Option 3-2</Link></li>
            </ul>
      	</li>
		<li><Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 4</Link></li>
	</ul>
</div>
  );
}
