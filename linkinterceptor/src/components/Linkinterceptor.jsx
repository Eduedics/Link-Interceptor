import 'bootstrap/dist/css/bootstrap.min.css';
function linkinterceptor() {
  return (
    <div className='bg-dark text-white'>
      <section className='text-center p-5 px-3'>
        <h1 className='display-4 text-success mb-3'>Link Click Interceptor</h1>
        <p className='lead mb-5'>
          Smart protection against suspicious links,phishing,and shady websites
        </p>
        <a href='#waitlist' className='btn btn-success ttn-lg'>join waitlist</a>
      </section>
      <section className='bg-danger text-center p-5'>
        <h2 className='h2 mb-3'>One Click can be a disaster</h2>
        <p className='mx-auto w-75'>
          90% of cyber attacks start with a malicious link. Children, kids, and employees click suspicious links every day. Most tools block everything or do nothing at all.Link Click Interceptor offers a smarter solution.
        </p>

      </section>
      <section className='text-center p-5 px-3'>
        <h2 className='h2 text-info mb-4'>How it works</h2>
        <ol className="list-group list-group-numbered w-50 mx-auto text-dark">
          <li className="list-group-item">User clicks a link</li>
          <li className="list-group-item">It's intercepted before loading</li>
          <li className="list-group-item">We check the link's safety in real time</li>
          <li className="list-group-item">If safe, we allow navigation. If not, we block with a warning</li>
        </ol>
      </section>
      <section className="bg-secondary py-5 px-3 text-center">
        <h2 className="h2 mb-4">Who It's For</h2>
        <div className="row justify-content-center .text-light">
          <div className="col-md-5 mb-2">👨‍👩‍👧‍👦 Parents: Keep kids away from harmful content</div>
          <div className="col-md-5 mb-2">🏫 Schools: Enforce safe access on shared computers</div>
          <div className="col-md-5 mb-2">👩‍💼 Employees: Avoid phishing and suspicious links</div>
          <div className="col-md-5 mb-2">🌍 Privacy-concerned users: Stay away from shady redirects</div>
        </div>
      </section>

      <section id="waitlist" className="py-5 px-3 text-center">
        <h2 className="h2 mb-3">Be the First to Try It</h2>
        <p className="mb-4 w-75 mx-auto blink-text">
          Want to be an Early tester. Join others interested in smart browsing protection.
        </p>
        <form action="https://formspree.io/f/xkgbezya" method="POST" className="w-50 mx-auto">
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Join Waitlist
          </button>
        </form>
      </section>
      <footer className="bg-dark text-secondary py-4 text-center small">
        Built with ❤️ by Jays Tech | © {new Date().getFullYear()} Link Click Interceptor
      </footer>
    </div>
  )
}

export default linkinterceptor