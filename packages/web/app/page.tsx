"use client";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Code, Zap, Github, Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NpmCard from "./npmCard";
import ConfigCard from "./config-card";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function EnvGuardLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header
        className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">envguard</span>
            <Badge variant="secondary">v1.0.0</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={"https://github.com/SurajKharkwal"}
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
            <Link
              href={"https://www.npmjs.com/package/@flyinghawk/envguard"}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-lg px-8",
              )}
            >
              <Download className="h-4 w-4 mr-2" />
              Install
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                Type-Safe Environment Variables
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Secure Your Environment Variables with{" "}
              <span className="text-blue-600">Zod</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              EnvGuard ensures your environment variables exist and match your
              Zod schema, providing type safety and runtime validation for your
              Node.js applications.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href={"https://github.com/SurajKharkwal/envguard"}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-lg px-8",
                )}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Started
              </Link>
              <Link
                href={"https://www.npmjs.com/package/@flyinghawk/envguard"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-lg px-8",
                )}
              >
                <Code className="h-5 w-5 mr-2" />
                View Docs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Installation
            </h2>
            <p className="text-gray-600">
              Get started with envguard in seconds
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <NpmCard />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why EnvGuard?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop worrying about missing or invalid environment variables in
              production
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-green-600 mb-4" />,
                title: "Runtime Validation",
                description:
                  "Validate environment variables at runtime using your Zod schema",
                content:
                  "Catch configuration errors early and prevent silent failures in production.",
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Type Safety",
                description:
                  "Get full TypeScript support with inferred types from your schema",
                content:
                  "Enjoy autocomplete and type checking for all your environment variables.",
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-600 mb-4" />,
                title: "Zero Config",
                description:
                  "Simple API that works with your existing Zod schemas",
                content:
                  "No complex setup required. Define your schema and you're ready to go.",
              },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple to Use
            </h2>
            <p className="text-xl text-gray-600">
              Define your schema and let EnvGuard handle the rest
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ConfigCard />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Environment?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join developers who trust EnvGuard to validate their environment
              variables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"https://github.com/SurajKharkwal"}
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                <Download className="h-5 w-5 mr-2" />
                Install EnvGuard
              </Link>
              <Link
                href={"https://github.com/SurajKharkwal"}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-lg px-8 border-gray-800 text-gray-100 hover:bg-gray-100",
                )}
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">envguard</span>
          </div>
          <p className="text-gray-400 mb-4">
            Type-safe environment variable validation for Node.js
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link
              href="https://github.com/SurajKharkwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/@flyinghawk/envguard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              View on NPM
            </Link>
            <Link
              className="hover:text-white transition-colors"
              href="mailto:kharkwalsurah13@gmail.com"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
