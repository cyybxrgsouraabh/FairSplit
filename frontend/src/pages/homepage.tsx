import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { Button } from "../components/ui/button";

const features = [
  {
    icon: "⚡",
    title: "Instant Splits",
    desc: "Add an expense and FairSplit calculates who owes what in real time — no mental math needed.",
  },
  {
    icon: "👥",
    title: "Group Management",
    desc: "Create groups for trips, roommates, or events. Everyone stays on the same page, always.",
  },
  {
    icon: "🔐",
    title: "Secure & Private",
    desc: "Your financial data is protected with JWT-authenticated sessions and encrypted connections.",
  },
  {
    icon: "📊",
    title: "Clear Balances",
    desc: "See exactly who owes whom with a clean summary — settle up without any awkward conversations.",
  },
  {
    icon: "🌐",
    title: "Works Everywhere",
    desc: "Fully responsive on any device. Split bills from your phone at dinner or your laptop at home.",
  },
  {
    icon: "🤝",
    title: "Fair by Design",
    desc: "Equal splits, custom amounts, or percentage-based — whatever's fair for your group.",
  },
];

const steps = [
  { step: "01", title: "Create a Group", desc: "Invite your friends, roommates, or travel buddies." },
  { step: "02", title: "Add Expenses", desc: "Log who paid and split it however you like." },
  { step: "03", title: "See Balances", desc: "Instantly know who owes what. Settle up with ease." },
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
      <NavBar />

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-24 right-0 w-72 h-72 rounded-full bg-violet-400/10 blur-[80px]" />

        <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide">
          ✨ Split bills. Zero stress.
        </span>

        <h1 className="font-GTWalsheim text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl">
          Stop doing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
            expense math
          </span>{" "}
          in your head
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
          FairSplit makes splitting bills with friends, roommates, and travel
          groups effortless. Add expenses, settle debts, and keep everyone happy.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Button
            onClick={() => navigate("/signup")}
            className="font-GTWalsheim px-8 py-3 text-base bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
          >
            Get Started — It's Free
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/login")}
            className="font-GTWalsheim px-8 py-3 text-base rounded-xl border-zinc-300 dark:border-zinc-700 hover:border-purple-500 transition-all duration-200"
          >
            Sign In
          </Button>
        </div>

        <p className="mt-4 text-sm text-zinc-400">No credit card required</p>
      </section>

      {/* ── Social Proof Bar ── */}
      <section className="border-y border-zinc-100 dark:border-zinc-800 py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "Active Users", value: "10k+" },
            { label: "Expenses Tracked", value: "$2M+" },
            { label: "Groups Created", value: "50k+" },
            { label: "Settled Debts", value: "99.9%" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-GTWalsheim text-3xl font-bold text-purple-500">{value}</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-GTWalsheim text-3xl sm:text-4xl font-bold">
            Everything you need to split fairly
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Powerful features wrapped in a clean interface so you can focus on
            what matters — enjoying time with your people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-GTWalsheim text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-GTWalsheim text-3xl sm:text-4xl font-bold">
            Up and running in 60 seconds
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            No tutorials, no complexity. Just sign up and start splitting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden sm:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          {steps.map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center text-center gap-4 relative">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white font-GTWalsheim text-xl font-bold flex items-center justify-center shadow-lg shadow-purple-500/30 z-10">
                {step}
              </div>
              <h3 className="font-GTWalsheim text-lg font-semibold">{title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative text-center px-8 py-16 text-white">
            <h2 className="font-GTWalsheim text-3xl sm:text-4xl font-bold mb-4">
              Ready to split fairly?
            </h2>
            <p className="text-purple-100 mb-8 max-w-md mx-auto">
              Join thousands of people who use FairSplit to keep friendships
              strong and finances clear.
            </p>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-white text-purple-700 hover:bg-purple-50 font-GTWalsheim px-8 py-3 text-base rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              Create Your Free Account
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-GTWalsheim text-xl font-bold text-purple-500">FairSplit</span>
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} FairSplit. Built with ❤️ to keep things fair.</p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-purple-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;