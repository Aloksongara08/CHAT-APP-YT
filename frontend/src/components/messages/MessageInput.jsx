import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3 relative'>
			<div className='relative w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10'
					placeholder='Send a message'
				/>
				<button type='submit' className='absolute bottom-3 right-2 flex items-center'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};

export default MessageInput;