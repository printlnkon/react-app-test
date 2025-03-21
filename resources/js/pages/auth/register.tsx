import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Checkbox } from '@/components/ui/checkbox';

type RegisterForm = {
    first_name: string;
    last_name: string;
    id_no: string;
    school_email: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        first_name: '',
        last_name: '',
        id_no: '',
        school_email: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [agreed, setAgreed] = useState(false);
    const [agreementError, setAgreementError] = useState('');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (!agreed) {
            setAgreementError('You must agree to the Terms and Conditions.');
            return;
        }

        setAgreementError('');
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    {/* pag naglalagay si user ng info, nagkakasabay-sabay -- NEED TO BE FIXED --  */}
                    {/* FIXED FIXED FIXEX PROBLEM */}
                    <div className="grid gap-2">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                            id="first_name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            disabled={processing}
                            placeholder="First Name"
                        />
                        <InputError message={errors.first_name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Last Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            disabled={processing}
                            placeholder="Last Name"
                        />
                        <InputError message={errors.last_name} className="mt-2" />
                    </div>


                    <div className="grid gap-2">
                        <Label htmlFor="/">Identification No.</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.id_no}
                            onChange={(e) => setData('id_no', e.target.value)}
                            disabled={processing}
                            placeholder="Identification No."
                        />
                        <InputError message={errors.id_no} className="mt-2" />
                    </div>


                    <div className="grid gap-2">
                        <Label htmlFor="name">School Email</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.school_email}
                            onChange={(e) => setData('school_email', e.target.value)}
                            disabled={processing}
                            placeholder="School Email"
                        />
                        <InputError message={errors.school_email} className="mt-2" />
                    </div>


                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="terms"
                            checked={agreed}
                            onCheckedChange={(checked) => setAgreed(checked as boolean)}
                            disabled={processing}
                        />
                        <Label htmlFor="terms" className="text-sm">
                            I agree to the <TextLink href="/terms">Terms and Conditions</TextLink>
                        </Label>
                    </div>
                    {agreementError && <InputError message={agreementError} />}

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
