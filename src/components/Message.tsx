const Message = ({ notification }: any) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          {notification.image && (
            <div className="max-h-[80%] max-w-[80%]">
              <img src={notification.image} />
            </div>
          )}
        </div>
        <div className="text-sm">{notification.body}</div>
      </div>
    </>
  );
};

export default Message;
