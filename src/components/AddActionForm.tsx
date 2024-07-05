import { useId, useState } from 'react';
import ToastWrapper from './ToastWrapper';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

function TextInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=""
        className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400"
      >
        {label}
      </label>
    </div>
  );
}

function FileInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="file"
        id={id}
        accept="image/*" 
        capture="environment"
        name="image" 
        autoComplete="none"
        className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-8 pt-8 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
    </div>
  );
}

interface userActionInput {
  name: string;
  impact: number;
  description: string;
  actionId: string;
  userId: string;
  image?: string;
}

const AddActionForm = (props: any) => {
  const { action, actionId, userId } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userActionInputs, setuserActionInputs] = useState<userActionInput>({
    name: action.name,
    impact: action.impactPoints,
    description: '',
    actionId: actionId,
    userId: userId
  });

  async function sendRequest() {
    try {
      setLoading(true);
      if (userActionInputs.description) {
        const response = await axios.post(`${BACKEND_URL}/api/v1/userAction`, userActionInputs);
        if (response && response?.data?.id) {
          toast.success("Action logged successfully!");
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000)
        } else {
          toast.error('Something went wrong.');
        }
      } else {
        toast.error('Caption field is mandatory.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status) {
          toast.error(error.response?.data?.error || 'Something went wrong');
        } else if(error.response?.data?.error) {
          toast.error('Something went wrong');
        }
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
      <>
        <div className="w-full md:pb-10 md:px-10">
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-gray-900/20">
            <TextInput 
              label="Add a caption" 
              name="caption" 
              autoComplete="none" 
              onChange={(event) => {
                setuserActionInputs({ ...userActionInputs, description: event.target.value });
              }}
            />
            <FileInput label="Upload an Image" />
          </div>
          <div className="flex justify-end">
            <button id="saveForm" className="mt-6" disabled={loading} onClick={sendRequest}>
              Log Action {loading && <Spinner className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <ToastWrapper />
      </>
    );
  };
  
export default AddActionForm;

