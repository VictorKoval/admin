<?php

use App\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (User::where('email', 'super-admin@illuminu.co.uk')->count() == 0) {

            $admin = new User([
                'name' => 'Super Admin',
                'email' => 'super-admin@skillful.in.ua',
                'password' => bcrypt('111111'),
            ]);
            $admin->save();
        }
    }
}
